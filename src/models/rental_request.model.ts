import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface OrderItemAttributes {
    id: string,
    product_id: string,
    buyer_id: string,
    start_date: string,
    end_date: string,
    days: number,
    status_id: string
}

export class OrderItem extends Model<OrderItemAttributes> implements OrderItemAttributes {
    public id!: string;
    public product_id!: string;
    public buyer_id!: string;
    public start_date!: string;
    public end_date!: string;
    public days!: number;
    public status_id!: string;
}

export const OrderItemModel = (sequelize: Sequelize) => {
    OrderItem.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            product_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            buyer_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            start_date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            end_date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            days: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            status_id: {
                type: DataTypes.STRING,
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
