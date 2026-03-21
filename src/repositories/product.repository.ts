import { Op } from "sequelize";
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { ProductDTO } from "../dto/product.dto";

export const createProduct = async (data: ProductDTO) => {
  return await Product.create(data);
};

// export const getProductById = async (id: string) => {
//   return await Product.findOne({ where: { id } });
// };

export const getProductById = async (id: string) => {
  return await Product.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: "seller",
        attributes: ["id", "first_name", "last_name", "email_id", "mobile", "city", "state", "zip"]
      }
    ]
  });
};


// export const getAllProducts = async () => {
//   return await Product.findAll();
// };

export const getAllProducts = async (q = "") => {
  const query = q.trim();

  if (!query) {
    return await Product.findAll();
  }

  return await Product.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.iLike]: `%${query}%` } },
        { location_zip: { [Op.iLike]: `%${query}%` } }
      ]
    }
  });
};

export const updateProductById = async (id: string, data: any) => {
  return await Product.update(data, {
    where: { id }
  });
};

export const getProductsBySellerId = async (seller_id: string) => {
  return await Product.findAll({
    where: { seller_id },
    order: [['created_at', 'DESC']]
  });
};
