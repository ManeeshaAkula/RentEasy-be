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
                type: DataTypes.STRING,
                primaryKey: true,
            },
            product_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            order_item_id: {
                type: DataTypes.STRING,
                allowNull: false,
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
