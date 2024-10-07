import { sql } from "../../database";

export const findTotalIncome = async (request, response) => {
  const { userid } = request.body;
  try {
    const totalIncome = await sql`select sum(amount)
                                    from transactions
                                    Where transactions.user_id = ${userid} AND transactions.transaction_type = 'INC'`;
    response.status(200).json({ totalIncome });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
