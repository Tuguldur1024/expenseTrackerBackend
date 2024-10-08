import { sql } from "../../database";

export const getTransactionByUserId = async (request, response) => {
  const { user_id, filter } = request.body;
  console.log(request.body);

  let query = sql`
    SELECT transaction_type, transactions.created_at, amount, categories.name
    FROM transactions 
    INNER JOIN users ON users.id = transactions.user_id
    INNER JOIN categories ON categories.id = transactions.category_id
    WHERE transactions.user_id = ${user_id}`;

  if (filter === "Income") {
    query = sql`${query} AND transactions.transaction_type = 'INC'`;
  } else if (filter === "Expense") {
    query = sql`${query} AND transactions.transaction_type = 'EXP'`;
  }

  try {
    console.log(query);
    const myTransactions = await query;
    response.status(200).json({ transactions: myTransactions });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ message: "An error occurred while fetching transactions." });
  }
};
