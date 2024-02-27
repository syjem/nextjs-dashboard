'use server';

import { sql } from '@vercel/postgres';
import { type State } from './create-invoices';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { InvoiceSchema } from './invoice-schema';

const UpdateInvoice = InvoiceSchema.omit({ id: true, date: true });

export const updateInvoice = async (
  id: string,
  prevState: State,
  formData: FormData
) => {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to update invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices 
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to update invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
};
