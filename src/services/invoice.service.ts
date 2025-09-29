import { InvoiceDTO } from '../dto/invoice.dto';
import * as InvoiceRepo from '../repositories/invoice.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { Invoice } from '../models/invoice.model';

export const createInvoice = async (dto: InvoiceDTO): Promise<ApiResponse<Invoice>> => {
    try {
        const response = await InvoiceRepo.createInvoice(dto);
        return successResponse(response, 'Invoice Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add Invoice Data', 500)
    }
};

export const getAllInvoiceData = async (): Promise<ApiResponse<Invoice[]>> => {
    try {
        const allInvoiceData = await InvoiceRepo.getAllInvoices();
        return successResponse(allInvoiceData ?? [], 'Invoices data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All Invoices data', 500)

    }
};

export const getInvoiceById = async (id: string): Promise<ApiResponse<Invoice | null>> => {
    try {
        const InvoiceData = await InvoiceRepo.getInvoiceById(id);
        return successResponse(InvoiceData, 'Invoice data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch Invoice data', 500)

    }
};

export const updateInvoiceById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await InvoiceRepo.updateInvoiceById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'Invoice updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update Invoice', 500)
    }
};
