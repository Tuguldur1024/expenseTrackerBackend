import { sql } from "../../database";

export const deleteUser = async (request, response) => {
  const { id } = request.body;
  try {
    await sql`DELETE * FROM users where id=${id}`;
    response.status(200).json({ message: "amjilttai ustgalaa" });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
