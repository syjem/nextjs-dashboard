import { z } from 'zod';

export const InvoiceSchema = z.object({
  id: z.string(),
  date: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer',
  }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Select a valid status.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Amount mst be greater than $0.' }),
});
