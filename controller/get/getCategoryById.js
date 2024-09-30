import { sql } from "../../database";

export const getCategory = async (request, response) => {
  const { id } = request.body;
  try {
    const categories = await sql`SELECT * FROM categories where id=${id}`;
    response.status(200).json({ categories: categories });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
