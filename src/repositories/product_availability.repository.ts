import { ProductAvailability } from '../models/product_availability.model';
import { ProductAvailabilityDTO } from "../dto/product_availability.dto"

export const createProductAvailability = async (data: ProductAvailabilityDTO) => {
  return await ProductAvailability.create(data);
};

export const getProductAvailabilityById = async (id: string) => {
  return await ProductAvailability.findOne({ where: { id } });
};

export const getAllProductAvailabilitys = async () => {
  return await ProductAvailability.findAll();
};

export const updateProductAvailabilityById = async (id: string, data: any) => {
  return await ProductAvailability.update(data, {
    where: { id }
  });
};
