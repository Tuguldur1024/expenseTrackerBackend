import { sql } from "../../database";

export const getTransactionByUserId = async (request, response) => {
  const { user_id } = request.body;
  try {
    const myTransactions =
      await sql`Select transaction_type, transactions.created_at, amount, categories.name
    from transactions 
    inner join users on users.id = transactions.user_id
    inner join categories on categories.id = transactions.category_id
    WHERE transactions.user_id = ${user_id}`;
    response.status(200).json({ transactions: myTransactions });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
