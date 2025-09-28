export interface OrderDTO {
    id: string,
    buyer_id: string,
    status_id: string,
    subtotal: number,
    tax: number,
    total: number,
    currency: string
}