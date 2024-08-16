import express from "express";
import { adminOnly } from "../middleware/auth.js";
import { singleUpload } from "../middleware/multer.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getlatestProducts, getSingleProduct, newProduct, upadateProduct, } from "../controllers/product.js";
const app = express.Router();
// Create New Product -/api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);
// To get Last 10 Products  -/api/v1/product/latest
app.get("/all", getAllProducts);
app.get("/latest", getlatestProducts);
app.get("/categories", getAllCategories);
app.get("/admin-products", adminOnly, getAdminProducts);
app
    .route("/:id")
    .get(getSingleProduct)
    .put(adminOnly, singleUpload, upadateProduct)
    .delete(adminOnly, deleteProduct);
export default app;
