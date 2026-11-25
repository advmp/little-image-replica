import { z } from 'zod';
export const partnerSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.'),
  organization: z.string().trim().min(1, 'Please enter your organization.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  message: z.string().trim().min(1, 'Please enter a message.'),
});
export type PartnerValues = z.infer<typeof partnerSchema>;
