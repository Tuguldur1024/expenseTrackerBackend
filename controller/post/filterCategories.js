import { sql } from "../../database";

export const filterCategories = async (request, response) => {
  const { categories, userid } = request.body;
  console.log(request.body);
  try {
    const transactions = filteredTransactions(categories, userid);
    response.status(200).json({ transactions });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};

export const filteredTransactions = async (userid, categories) => {
  let userTransaction =
    await sql`SELECT transaction_type, transactions.created_at, amount, categories.name
            FROM transactions 
            INNER JOIN users ON users.id = transactions.user_id
            INNER JOIN categories ON categories.id = transactions.category_id
            WHERE transactions.user_id = ${userid} `;

  return filteredTransactions;
};
