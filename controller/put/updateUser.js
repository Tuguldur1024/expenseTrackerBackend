import { sql } from "../../database";

export const updateUser = async (request, response) => {
  const { id } = request.params;
  const { email, name, avatar_img } = request.body;
  try {
    await sql`UPDATE user 
            SET email= ${email}, name= ${name}, avatar_img=${avatar_img}
            WHERE id=${id}`;
    response.status(200).json({ message: "Request has succesfully been done" });
  } catch (error) {
    response.status(400).json({ message: "Bad request" });
  }
};

