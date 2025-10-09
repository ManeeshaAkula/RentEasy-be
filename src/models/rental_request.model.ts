import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface RentalRequestAttributes {
    id: string,
    product_id: string,
    buyer_id: string,
    start_date: string,
    end_date: string,
    days: number,
    status_id: string
}

export class RentalRequest extends Model<RentalRequestAttributes> implements RentalRequestAttributes {
    public id!: string;
    public product_id!: string;
    public buyer_id!: string;
    public start_date!: string;
    public end_date!: string;
    public days!: number;
    public status_id!: string;
}

export const RentalRequestModel = (sequelize: Sequelize) => {
    RentalRequest.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            product_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                }
            },
            buyer_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            start_date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            end_date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            days: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'reference_data',
                    key: 'id'
                }
            }
        },
        {
            sequelize,
            tableName: 'rental_requests',
            modelName: 'RentalRequests',
            underscored: true,
            timestamps: true,
        }
    );

    return RentalRequest;
};
