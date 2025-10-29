import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserDTO } from '../dto/user.dto';
import { LoginResponseDTO } from '../dto/auth.dto';
import * as UserRepo from '../repositories/user.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { User } from '../models/user.model';
import { ReferenceData } from "../models/reference_data.model";
import { normalizeEmail, normalizeMobile } from '../utils/normalizers';

export const createUser = async (dto: UserDTO): Promise<ApiResponse<User>> => {
    try {
        const em = normalizeEmail(dto.email_id);
        const mb = normalizeMobile(dto.mobile);

        if (!em || !mb) {
            return errorResponse('Email or mobile is invalid', 400);
        }

        const existing = await UserRepo.findByEmailOrMobile(em, mb);
        console.log(".......... existing user", existing)
        if (existing) {
            return errorResponse('Email or mobile already exists', 409);
        }

        if (dto.role_id) {
            const role = await ReferenceData.findOne({ where: { id: dto.role_id, category: 'USER_ROLE' } });
            console.log(".......... role in service", role)
            if (!role) return errorResponse('Invalid role_id', 400);
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        console.log("......... hashed password", hashedPassword)
        const payload = { ...dto, email_id: em, mobile: mb, password: hashedPassword };
        console.log("...... payload in service", payload)
        const response = await UserRepo.createUser(payload);
        return successResponse(response, 'User created successfully', 201);
    } catch (error) {
        console.log("......... error in service catch", error)
        return errorResponse('Failed to add User', 500);
    }
};

export const login = async (body: any): Promise<ApiResponse<LoginResponseDTO>> => {
    try {
        const { username, password, role } = body;
        console.log(".......... body in service", body)
        if (!username || !password) return errorResponse('Username and password are required', 400);

        const email_id = username.includes('@') ? normalizeEmail(username) : null;
        const mobile = !email_id ? normalizeMobile(username) : null;

        const user = await UserRepo.findByEmailOrMobileAndRole(email_id, mobile, role);
        console.log("..........user in service", user)
        if (!user) return errorResponse('Invalid credentials', 401);

        const roleRecord = await ReferenceData.findOne({
            where: { id: user.getDataValue('role_id') },
            attributes: ['label']
        });

        const ok = await bcrypt.compare(password, user.getDataValue('password'));
        console.log("....... ok after bcrypt", ok)
        if (!ok) return errorResponse('Invalid credentials', 401);

        const token = jwt.sign(
            {
                id: user.getDataValue('id'), role_id:
                    user.getDataValue('role_id'),
                role_name: roleRecord ? roleRecord.getDataValue('label') : null
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1d' })
        const plain = user.get({ plain: true });
        delete (plain as any).password;

        const response: LoginResponseDTO = {
            token,
            user: {
                id: plain.id,
                first_name: plain.first_name,
                middle_name: plain.middle_name,
                last_name: plain.last_name,
                gender: plain.gender,
                role_id: plain.role_id,
                mobile: plain.mobile,
                email_id: plain.email_id,
                city: plain.city,
                state: plain.state,
                zip: plain.zip
            }
        };
        console.log("........... response after token", response)
        return successResponse(response, 'Login successful', 200);
    } catch (error) {
        console.log("........... error in login service", error)
        return errorResponse('Failed to login', 500);
    }
};

export const getAllUserData = async (): Promise<ApiResponse<User[]>> => {
    try {
        const allUserData = await UserRepo.getAllUsers();
        return successResponse(allUserData, 'Users data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All Users data', 500)

    }
};

export const getUserById = async (id: string): Promise<ApiResponse<User | null>> => {
    try {
        const UserData = await UserRepo.getUserById(id);
        return successResponse(UserData, 'User data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch User data', 500)

    }
};

export const updateUserById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await UserRepo.updateUserById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'User updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update User', 500)
    }
};
