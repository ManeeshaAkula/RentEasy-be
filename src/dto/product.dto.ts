export interface ProductDTO {
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