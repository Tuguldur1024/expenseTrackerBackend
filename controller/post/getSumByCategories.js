import { sql } from "../../database";

export const getSumByCategoriesIncome = async (request, response) => {
  const { userid } = request.body;
  console.log(userid);
  try {
    const data =
      await sql`Select sum(amount), category_id, categories.name, user_id from transactions
                Inner Join categories on categories.id = transactions.category_id
                Where transactions.user_id = ${userid} AND transaction_type = 'INC' 
                Group by category_id , categories.name , user_id`;
    response.status(200).json(data);
  } catch (error) {
    response.status(400).json(error);
  }
};
export const getSumByCategoriesExpense = async (request, response) => {
  const { userid } = request.body;
  try {
    const data =
      await sql`Select sum(amount), category_id, categories.name, user_id from transactions
                    Inner Join categories on categories.id = transactions.category_id
                    Where transactions.user_id = ${userid} AND transaction_type = 'EXP'
                    Group by category_id , categories.name , user_id`;
    response.status(200).json(data);
  } catch (error) {
    response.status(400).json(error);
    console.log(error);
  }
};
