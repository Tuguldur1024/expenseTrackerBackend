import express from "express";

import { deleteUser } from "../controller/delete/deleteUser";
import { getUsers } from "../controller/get/getUsers";
import { getUser } from "../controller/get/getUserById";
import { updateUser } from "../controller/put/updateUser";
import { addUser } from "../controller/post/addUser";

const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .get("/:id", getUser)
  .delete("/", deleteUser)
  .put("/", updateUser)
  .post("/", addUser);
