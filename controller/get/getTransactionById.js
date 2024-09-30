import { sql } from "../../database";

export const getTransactions = async (request, response) => {
  const { id } = request.body;
  try {
    const transaction = await sql`SELECT * FROM transactions where id=$id}`;
    response.status(200).json({ transaction: transaction });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
