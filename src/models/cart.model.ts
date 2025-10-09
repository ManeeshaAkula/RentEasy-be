import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface CartAttributes {
    id: string,
    buyer_id: string,
    status_id: string
}

export class Cart extends Model<CartAttributes> implements CartAttributes {
    public id!: string;
    public buyer_id!: string;
    public status_id!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export const CartModel = (sequelize: Sequelize) => {
    Cart.init(
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
            }
        },
        {
            sequelize,
            tableName: 'carts',
            modelName: 'Carts',
            underscored: true,
            timestamps: true
        }
    );

    return Cart;
};
