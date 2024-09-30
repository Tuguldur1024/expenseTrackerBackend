import express from "express";
import { getCategories } from "../controller/get/getCategories";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
