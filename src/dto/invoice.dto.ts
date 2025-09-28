export interface InvoiceDTO {
    id: string,
    order_id: string,
    invoice_number: string,
    s3_key: string,
    s3_url: string,
    total: number
}