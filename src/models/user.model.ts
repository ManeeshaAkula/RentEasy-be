import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface UserAttributes {
    id: string,
    first_name: string,
    middle_name?: string,
    last_name?: string,
    gender?: string,
    role_id: string,
    mobile: string,
    email_id: string,
    city: string,
    state: string,
    zip: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'middle_name' | 'last_name' | 'gender'> { }

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: string;
    public first_name!: string;
    public middle_name!: string;
    public last_name!: string;
    public gender!: string;
    public role_id!: string;
    public mobile!: string;
    public email_id!: string;
    public city!: string;
    public state!: string;
    public zip!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export const UserModel = (sequelize: Sequelize) => {
    User.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            middle_name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            role_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'reference_data',
                    key: 'id'
                }
            },
            mobile: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            zip: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'users',
            modelName: 'users',
            underscored: true,
            timestamps: true,
        }
    );

    return User;
};
