import { sql } from "../../database";

export const filterCategories = async (request, response) => {
  const { categories } = request.body;
  try {
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
