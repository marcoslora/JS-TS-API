import { Router } from "express";
import {
  createNewProduct,
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../controllers/products.controller";
import { get } from "express/lib/response";
const router = Router();

router.get("/products", getProducts);

router.get("/products/:id", getProductById);

router.post("/products", createNewProduct);

router.put("/products/:id", updateProductById);

router.delete("/products/:id", deleteProductById);

export default router;
