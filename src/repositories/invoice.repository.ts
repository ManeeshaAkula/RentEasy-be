import { Invoice } from '../models/invoice.model';
import { InvoiceDTO } from "../dto/invoice.dto"

export const createInvoice = async (data: InvoiceDTO) => {
  return await Invoice.create(data);
};

export const getInvoiceById = async (id: string) => {
  return await Invoice.findOne({ where: { id } });
};

export const getAllInvoices = async () => {
  return await Invoice.findAll();
};

export const updateInvoiceById = async (id: string, data: any) => {
  return await Invoice.update(data, {
    where: { id }
  });
};
