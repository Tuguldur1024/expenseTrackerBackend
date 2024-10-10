import { sql } from "../../database";

export const getTransactions = async (request, response) => {
  const { condition } = request.body;
  try {
    const transactions =
      await sql`SELECT * FROM transactions Order by created_at ${condition}`;
    response.status(200).json({ transactions: transactions });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
