import { Router } from 'express';
import CartItemRoutes from './cart_item.routes';
import CartRoutes from './cart.routes';
import InvoiceRoutes from './invoice.routes';
import OrderItemRoutes from './order_item.routes';
import OrderRoutes from './order.routes';
import ProductAvailabilityRoutes from './product_availability.routes';
import ProductRoutes from './product.routes';
import ReferenceDataRoutes from './reference_data.routes';
import RentalRequestRoutes from './rental_request.routes';
import ReservationRoutes from './reservation.routes';
import userRoutes from './user.routes';


const router = Router();

router.use('/cart_item', CartItemRoutes);
router.use('/cart', CartRoutes);
router.use('/invoice', InvoiceRoutes);
router.use('/order_item', OrderItemRoutes);
router.use('/order', OrderRoutes);
router.use('/product_availability', ProductAvailabilityRoutes);
router.use('/product', ProductRoutes);
router.use('/reference-data', ReferenceDataRoutes);
router.use('/rental_request', RentalRequestRoutes);
router.use('/reservation', ReservationRoutes);
router.use('/user', userRoutes);

export default router;
