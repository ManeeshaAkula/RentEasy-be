import { Product } from '../models/product.model';
import { ProductDTO } from "../dto/product.dto";

export const createProduct = async (data: ProductDTO) => {
  return await Product.create(data);
};

export const getProductById = async (id: string) => {
  return await Product.findOne({ where: { id } });
};

export const getAllProducts = async () => {
  return await Product.findAll();
};

export const updateProductById = async (id: string, data: any) => {
  return await Product.update(data, {
    where: { id }
  });
};
