import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface CartItemAttributes {
    id: string,
    cart_id: string,
    product_id: string,
    start_date: string,
    end_date: string,
    days: number,
    price_per_day: number,
    subtotal: number
}

export class CartItem extends Model<CartItemAttributes> implements CartItemAttributes {
    public id!: string;
    public cart_id!: string;
    public product_id!: string;
    public start_date!: string;
    public end_date!: string;
    public days!: number;
    public price_per_day!: number;
    public subtotal!: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export const CartItemModel = (sequelize: Sequelize) => {
    CartItem.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            cart_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            product_id: {
                type: DataTypes.STRING,
                allowNull: false,
                 references: {
                    model: 'products',
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
            tableName: 'cart_items',
            modelName: 'CartItem',
            underscored: true,
            timestamps: true,
        }
    );

    return CartItem;
};
