import express from "express";
import { getCategories } from "../controller/get/getCategories";
import { getCategory } from "../controller/get/getCategoryById";
import { addCategory } from "../controller/post/addCategory";
import { deleteCategory } from "../controller/delete/deleteCategory";
import { updateCategory } from "../controller/put/updateCategory";
import { filterCategories } from "../controller/post/filterCategories";
export const categoryRouter = express.Router();

categoryRouter
  .get("/", getCategories)
  .get("/:id", getCategory)
  .post("/", addCategory)
  .delete("/", deleteCategory)
  .put("/", updateCategory)
  .post("/filterCategories", filterCategories);
