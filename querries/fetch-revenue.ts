import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export const fetchRevenue = async () => {
  noStore();
  try {
    const data = await sql`SELECT * FROM revenue`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
};
