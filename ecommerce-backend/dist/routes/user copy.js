import express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/user.js";
import { adminOnly } from "../middleware/auth.js";
const app = express.Router();
// route - /api/v1/user/new
app.post("/new", newUser);
// Route -/api/v1/user/user/all
app.get("/all", adminOnly, getAllUsers);
// Route -/api/v1/user/user/dynamicID
// chaining
app.route("/:id").get(getUser).delete(adminOnly, deleteUser);
export default app;
