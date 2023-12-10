import sql from "better-sqlite3"
import { resolve } from "styled-jsx/css";

const db = sql('meals.db')

export async function getMeals()
{
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // throw new Error('Loading meals failed');
  return db.prepare('select * from meals').all();
}


export async function getMeal(slug)
{
  return db.prepare(`select * from meals where slug=?`).get(slug);
}