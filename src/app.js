import express from "express";
import { categoryRouter } from "../router/category.router";
import { transactionRouter } from "../router/transaction.router";
import { userRouter } from "../router/user.router";

const app = express();

app.use(express.json());
const port = 3000;

app.use("/user", userRouter);
app.use("/transaction", transactionRouter);
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
