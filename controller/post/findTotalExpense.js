import { sql } from "../../database";

export const findTotalExpense = async (request, response) => {
  const { userid } = request.body;
  try {
    const expense = await sql`select sum(amount)
                            from transactions
                            Where transactions.user_id = ${userid} AND transactions.transaction_type = 'EXP'`;

    const categories = filteredCategory(userid);
    response.status(200).json({ expense });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
