import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function getData() {
  noStore();
  let data;
  try {
    data = await sql`SELECT * FROM "TABLE_1"`;
  } catch (error) {
    console.log(error);
  } finally {
    return data ? data.rows : null;
  }
}
