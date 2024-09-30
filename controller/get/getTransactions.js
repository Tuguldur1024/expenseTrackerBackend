import { sql } from "../../database";

export const getTransactions = async (_request, response) => {
  try {
    const transactions = await sql`SELECT * FROM transactions`;
    response.status(200).json({ transactions: transactions });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
