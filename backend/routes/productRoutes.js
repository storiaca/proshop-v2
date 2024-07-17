import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductByid,
} from "../controllers/productController.js";
// import products from "../data/products.js";

router.route("/").get(getProducts);

router.route("/:id").get(getProductByid);

export default router;
