import express from "express";
import { getTransactions } from "../controller/get/getTransactions";
import { getTransaction } from "../controller/get/getTransactionById";
import { daleteTransaction } from "../controller/delete/deleteTransaction";
import { addTransaction } from "../controller/post/addTransaction";
import { updateTransaction } from "../controller/put/updateTransaction";
import { getTransactionByUserId } from "../controller/get/getTransactionByUserID";

export const transactionRouter = express.Router();

transactionRouter
  .get("/", getTransactions)
  .delete("/", daleteTransaction)
  .post("/", addTransaction)
  .put("/", updateTransaction)
  .post("/byuserid", getTransactionByUserId);
