import { sql } from "../../database";

export const addCategory = async (request, response) => {
  const { name, description } = request.body;
  console.log(request.body);
  try {
    await sql`INSERT INTO categories(name, description)
                          VALUES(${name}, ${description})`;
    response.status(200).json({ message: "Request has been done" });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: error });
  }
};
