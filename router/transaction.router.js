import express from "express";
import { getTransactions } from "../controller/get/getTransactions";
import { getTransaction } from "../controller/get/getTransactionById";
import { daleteTransaction } from "../controller/delete/deleteTransaction";
import { addTransaction } from "../controller/post/addTransaction";
import { updateTransaction } from "../controller/put/updateTransaction";
import { getTransactionByUserId } from "../controller/get/getTransactionByUserID";
import { findTotalExpense } from "../controller/post/findTotalExpense";
import { findTotalIncome } from "../controller/post/findTotalIncome";
import { filterCategories } from "../controller/post/filterCategories";

export const transactionRouter = express.Router();

transactionRouter
  .get("/", getTransactions)
  .delete("/", daleteTransaction)
  .post("/", addTransaction)
  .put("/", updateTransaction)
  .post("/byuserid", getTransactionByUserId)
  .post("/getExpense", findTotalExpense)
  .post("/getIncome", findTotalIncome)
  .post("/filterCategories", filterCategories);
