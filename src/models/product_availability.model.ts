import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface ProductAvailabilityAttributes {
    id: string,
    product_id: string,
    date: string,
    is_available: boolean
}

export class ProductAvailability extends Model<ProductAvailabilityAttributes> implements ProductAvailabilityAttributes {
    public id!: string;
    public product_id!: string;
    public date!: string;
    public is_available!: boolean;

}

export const ProductAvailabilityItemModel = (sequelize: Sequelize) => {
    ProductAvailability.init(
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
            date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            is_available: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'product_availability',
            modelName: 'ProductAvailability',
            underscored: true,
            timestamps: true,
        }
    );

    return ProductAvailability;
};
