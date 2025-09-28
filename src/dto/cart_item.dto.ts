export interface CartItemDTO {
    id: string,
    cart_id: string,
    product_id: string,
    start_date: string,
    end_date: string,
    days: number,
    price_per_day: number,
    subtotal: number
}