import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface InvoiceAttributes {
    id: string,
    order_id: string,
    invoice_number: string,
    s3_key: string,
    s3_url: string,
    total: number
}

export class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
    public id!: string;
    public order_id!: string;
    public invoice_number!: string;
    public s3_key!: string;
    public s3_url!: string;
    public total!: number;
}

export const InvoiceModel = (sequelize: Sequelize) => {
    Invoice.init(
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
            invoice_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            s3_key: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            s3_url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            total: {
                type: DataTypes.DECIMAL(12,2),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'invoices',
            modelName: 'Invoices',
            underscored: true,
            timestamps: true,
        }
    );

    return Invoice;
};
