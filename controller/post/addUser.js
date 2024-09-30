import { sql } from "../../database";

export const addUser = async (request, response) => {
  const { email, name, avatar_img } = request.body;
  try {
    await sql`INSERT INTO user(email, name, avatar_img)
                VALUES(${email},${name},${avatar_img})`;
    response.status(200).json({ message: "request has been done" });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
