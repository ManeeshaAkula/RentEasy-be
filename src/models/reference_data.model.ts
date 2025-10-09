import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface ReferenceDataAttributes {
    id: string,
    category: string,
    code: string,
    label: string
}

export class ReferenceData extends Model<ReferenceDataAttributes> implements ReferenceDataAttributes {
    public id!: string;
    public category!: string;
    public code!: string;
    public label!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

export const ReferenceDataModel = (sequelize: Sequelize) => {
    ReferenceData.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            label: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'reference_data',
            modelName: 'ReferenceData',
            underscored: true,
            timestamps: true,
        }
    );

    return ReferenceData;
};
