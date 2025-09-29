export interface RentalRequestDTO {
    id: string,
    product_id: string,
    buyer_id: string,
    start_date: string,
    end_date: string,
    days: number,
    category_id: string,
    status_id: string
}
