import { Router } from 'express';
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { createProduct, fetchAllProductData, getProductById, updateProductById, getProductsBySellerId } from '../controllers/product.controller';

const router = Router();

const uploadDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Configure storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${unique}-${file.originalname}`);
    },
});

const upload = multer({ storage });
router.post('/create', upload.single("image"), createProduct);
router.get('/getAll', fetchAllProductData);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.get('/getBySellerId/:seller_id', getProductsBySellerId);

export default router;
