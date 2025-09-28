import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface ProductAttributes {
    id: string,
    seller_id: string,
    title: string,
    description?: string,
    image_url: string,
    category_id: string,
    price_per_day: number,
    quantity: number,
    deposit: number,
    location_city: string,
    location_state: string,
    location_zip: string
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'description'> { }

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public id!: string;
    public seller_id!: string;
    public title!: string;
    public description!: string;
    public image_url!: string;
    public category_id!: string;
    public price_per_day!: number;
    public quantity!: number;
    public deposit!: number;
    public location_city!: string;
    public location_state!: string;
    public location_zip!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export const ProductModel = (sequelize: Sequelize) => {
    Product.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            seller_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image_url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price_per_day: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            deposit: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            location_city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location_state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location_zip: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        },
        {
            sequelize,
            tableName: 'products',
            modelName: 'Products',
            underscored: true,
            timestamps: true,
        }
    );

    return Product;
};
