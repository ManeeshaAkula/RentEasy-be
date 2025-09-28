import { UserDTO } from '../dto/user.dto';
import * as UserRepo from '../repositories/user.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { User } from '../models/user.model';

export const createUser = async (dto: UserDTO): Promise<ApiResponse<User>> => {
    try {
        const response = await UserRepo.createUser(dto);
        return successResponse(response, 'User Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add User Data', 500)
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
