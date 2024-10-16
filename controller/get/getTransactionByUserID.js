import { sql } from "../../database";

export const getTransactionByUserId = async (request, response) => {
  const { user_id, filter, search, categories } = request.body;

  let query = sql`
    SELECT transactions.id, transaction_type, transactions.created_at, amount, categories.name
    FROM transactions 
    INNER JOIN users ON users.id = transactions.user_id
    INNER JOIN categories ON categories.id = transactions.category_id
    WHERE transactions.user_id = ${user_id}`;

  if (filter === "Income") {
    query = sql`${query} AND transactions.transaction_type = 'INC'`;
  } else if (filter === "Expense") {
    query = sql`${query} AND transactions.transaction_type = 'EXP'`;
  }
  query = sql`${query} ORDER BY transactions.created_at DESC`;

  try {
    const myTransactions = await query;
    const filteredTransactions =
      categories && categories.length > 0
        ? myTransactions.filter((oneTrans) =>
            categories.some((category) => oneTrans.name === category.name)
          )
        : myTransactions;

    if (search) {
      const searchedTransactions = filteredTransactions.filter(
        (oneTransaction) => {
          return oneTransaction.name.includes(search);
        }
      );
      response.status(200).json({ transactions: searchedTransactions });
    } else {
      response.status(200).json({ transactions: filteredTransactions });
    }
  } catch (error) {
    console.error("Error executing query:", error);
    response.status(400).json({ message: error });
  }
};
