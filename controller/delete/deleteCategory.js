import { sql } from "../../database";

export const deleteCategory = async (request, response) => {
  const { id } = request.body;
  try {
    await sql`DELETE * FROM categories where id=${id}`;
    response.status(200).json({ message: "amjilttai ustgalaa" });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
