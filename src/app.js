import express from "express";
import { categoryRouter } from "../router/category.router";

const app = express();

app.use(express.json());
const port = 3000;

app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
