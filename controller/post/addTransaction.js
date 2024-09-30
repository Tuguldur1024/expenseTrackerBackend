import { sql } from "../../database";

export const addTransaction = async (request, response) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    request.body;
  try {
    const addedTransaction =
      await sql`INSERT INTO transactions(user_id, name, amount, transaction_type, description, category_id)
                VALUES(${user_id}, ${name}, ${amount}, ${transaction_type}, ${description},${category_id})`;
  } catch (error) {}
};
