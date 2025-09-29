import { sequelize } from '../config/database'
import { CartItemModel } from './cart_item.model';
import { CartModel } from './cart.model';
import { InvoiceModel } from './invoice.model';
import { OrderItemModel } from './order_item.model';
import { OrderModel } from './order.model';
import { ProductAvailabilityItemModel } from './product_availability.model';
import { ProductModel } from './product.model';
import { ReferenceDataModel } from './reference_data.model';
import { RentalRequestModel } from './rental_request.model';
import { ReservationModel } from './reservation.model';
import { UserModel } from './user.model';


// init all models
const CartItemInstance = CartItemModel(sequelize);
const CartInstance = CartModel(sequelize);
const InvoiceInstance = InvoiceModel(sequelize);
const OrderItemInstance = OrderItemModel(sequelize);
const OrderInstance = OrderModel(sequelize);
const ProductAvailabilityInstance = ProductAvailabilityItemModel(sequelize);
const ProductInstance = ProductModel(sequelize);
const ReferenceDataInstance = ReferenceDataModel(sequelize);
const RentalRequestInstance = RentalRequestModel(sequelize);
const ReservationInstance = ReservationModel(sequelize);
const UserInstance = UserModel(sequelize);

ProductInstance.belongsTo(UserInstance, { foreignKey: 'seller_id', as: 'seller' });
UserInstance.hasMany(ProductInstance, { foreignKey: 'seller_id', as: 'products' });
ProductInstance.belongsTo(ReferenceDataInstance, { foreignKey: 'category_id', as: 'category' });

ProductAvailabilityInstance.belongsTo(ProductInstance, { foreignKey: 'product_id', as: 'product' });
ProductInstance.hasMany(ProductAvailabilityInstance, { foreignKey: 'product_id', as: 'availability' });

RentalRequestInstance.belongsTo(ProductInstance, { foreignKey: 'product_id', as: 'product' });
ProductInstance.hasMany(RentalRequestInstance, { foreignKey: 'product_id', as: 'rentalRequests' });
RentalRequestInstance.belongsTo(UserInstance, { foreignKey: 'buyer_id', as: 'buyer' });
UserInstance.hasMany(RentalRequestInstance, { foreignKey: 'buyer_id', as: 'rentalRequests' });
RentalRequestInstance.belongsTo(ReferenceDataInstance, { foreignKey: 'status_id', as: 'status' });

CartInstance.belongsTo(UserInstance, { foreignKey: 'buyer_id', as: 'buyer' });
UserInstance.hasMany(CartInstance, { foreignKey: 'buyer_id', as: 'carts' });
CartInstance.belongsTo(ReferenceDataInstance, { foreignKey: 'status_id', as: 'status' });

CartItemInstance.belongsTo(CartInstance, { foreignKey: 'cart_id', as: 'cart' });
CartInstance.hasMany(CartItemInstance, { foreignKey: 'cart_id', as: 'items' });
CartItemInstance.belongsTo(ProductInstance, { foreignKey: 'product_id', as: 'product' });
ProductInstance.hasMany(CartItemInstance, { foreignKey: 'product_id', as: 'cartItems' });

OrderInstance.belongsTo(UserInstance, { foreignKey: 'buyer_id', as: 'buyer' });
UserInstance.hasMany(OrderInstance, { foreignKey: 'buyer_id', as: 'orders' });
OrderInstance.belongsTo(ReferenceDataInstance, { foreignKey: 'status_id', as: 'status' });

OrderItemInstance.belongsTo(OrderInstance, { foreignKey: 'order_id', as: 'order' });
OrderInstance.hasMany(OrderItemInstance, { foreignKey: 'order_id', as: 'items' });
OrderItemInstance.belongsTo(ProductInstance, { foreignKey: 'product_id', as: 'product' });
ProductInstance.hasMany(OrderItemInstance, { foreignKey: 'product_id', as: 'orderItems' });
OrderItemInstance.belongsTo(UserInstance, { foreignKey: 'seller_id', as: 'seller' });
UserInstance.hasMany(OrderItemInstance, { foreignKey: 'seller_id', as: 'soldOrderItems' });

ReservationInstance.belongsTo(ProductInstance, { foreignKey: 'product_id', as: 'product' });
ProductInstance.hasMany(ReservationInstance, { foreignKey: 'product_id', as: 'reservations' });
ReservationInstance.belongsTo(OrderItemInstance, { foreignKey: 'order_item_id', as: 'orderItem' });
OrderItemInstance.hasMany(ReservationInstance, { foreignKey: 'order_item_id', as: 'reservations' });

InvoiceInstance.belongsTo(OrderInstance, { foreignKey: 'order_id', as: 'order' });
OrderInstance.hasOne(InvoiceInstance, { foreignKey: 'order_id', as: 'invoice' });

UserInstance.belongsTo(ReferenceDataInstance, { foreignKey: 'role_id', as: 'role' });

export {
    sequelize,
    CartItemInstance as CartItem,
    CartInstance as Cart,
    InvoiceInstance as Invoice,
    OrderItemInstance as OrderItem,
    OrderInstance as Order,
    ProductAvailabilityInstance as ProductAvailability,
    ProductInstance as Product,
    ReferenceDataInstance as ReferenceData,
    RentalRequestInstance as RentalRequest,
    ReservationInstance as Reservation,
    UserInstance as User
}
