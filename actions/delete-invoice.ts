'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export const deleteInvoice = async (id: string) => {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted invoice' };
  } catch (error) {
    return {
      message: 'Database Error: Failed to delete invoice.',
    };
  }
};
