import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface OrderItemAttributes {
    id: string,
    order_id: string,
    product_id: string,
    seller_id: string,
    start_date: string,
    end_date: string,
    days: number,
    price_per_day: number,
    subtotal: number
}

export class OrderItem extends Model<OrderItemAttributes> implements OrderItemAttributes {
    public id!: string;
    public order_id!: string;
    public product_id!: string;
    public seller_id!: string;
    public start_date!: string;
    public end_date!: string;
    public days!: number;
    public price_per_day!: number;
    public subtotal!: number;
}

export const OrderItemModel = (sequelize: Sequelize) => {
    OrderItem.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            order_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'orders',
                    key: 'id'
                }
            },
            product_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                }
            },
            seller_id: {
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
            price_per_day: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
            },
            subtotal: {
                type: DataTypes.DECIMAL(12,2),
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'order_items',
            modelName: 'OrderItems',
            underscored: true,
            timestamps: true,
        }
    );

    return OrderItem;
};