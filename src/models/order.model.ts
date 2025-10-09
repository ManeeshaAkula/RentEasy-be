import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface OrderAttributes {
    id: string,
    buyer_id: string,
    status_id: string,
    subtotal: number
    tax: number,
    total: number,
    currency: string
}

export class Order extends Model<OrderAttributes> implements OrderAttributes {
    public id!: string;
    public buyer_id!: string;
    public status_id!: string;
    public subtotal!: number;
    public tax!: number;
    public total!: number;
    public currency!: string;

}

export const OrderModel = (sequelize: Sequelize) => {
    Order.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            buyer_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            status_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'reference_data',
                    key: 'id'
                }
            },
            subtotal: {
                type: DataTypes.DECIMAL(12,2),
                allowNull: false,
            },
            tax: {
                type: DataTypes.DECIMAL(12,2),
                allowNull: false,
            },
            total: {
                type: DataTypes.DECIMAL(12,2),
                allowNull: false,
            },
            currency: {
                type: DataTypes.STRING(3),
                allowNull: false,
                defaultValue: 'USD'
            }
        },
        {
            sequelize,
            tableName: 'orders',
            modelName: 'Orders',
            underscored: true,
            timestamps: true,
        }
    );

    return Order;
};
