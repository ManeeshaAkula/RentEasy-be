import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

interface ReservationAttributes {
    id: string,
    product_id: string,
    order_item_id: string,
    date: string
}

export class Reservation extends Model<ReservationAttributes> implements ReservationAttributes {
    public id!: string;
    public product_id!: string;
    public order_item_id!: string;
    public date!: string;
}

export const ReservationModel = (sequelize: Sequelize) => {
    Reservation.init(
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
            order_item_id: {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'order_items',
                    key: 'id'
                }
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'reservations',
            modelName: 'Reservations',
            underscored: true,
            timestamps: true,
        }
    );

    return Reservation;
};
