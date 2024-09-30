import { sql } from "../../database";

export const updateCategory = async (request, response) => {
  const { id } = request.params;
  const { name, description, category_image } = request.body;
  try {
    await sql`UPDATE categories
                SET name=${name} description=${description} category_image=${category_image}
                WHERE id=${id}`;
    response.status(200).json({ message: "Request has been done" });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
