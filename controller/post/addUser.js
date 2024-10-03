import { sql } from "../../database";

export const addUser = async (request, response) => {
  const { email, name, password, avatar_img } = request.body;
  console.log(request.body);
  try {
    const addeduser =
      await sql`INSERT INTO users(email, name, avatar_img,password)
                VALUES(${email},${name},${avatar_img}, ${password})`;
    response.status(200).json({ message: addeduser });
  } catch (error) {
    response.status(400).json({ message: "hehe" });
  }
};
