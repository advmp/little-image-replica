import { describe, expect, it } from 'vitest';
import { partnerSchema } from '@/lib/partner-schema';

const validInquiry = { name: 'Morgan Lee', organization: 'Research Laboratory', email: 'morgan@example.org', message: 'Interested in cell characterization.' };
describe('Partner inquiry validation', () => {
  it('accepts a complete inquiry', () => {
    expect(partnerSchema.safeParse(validInquiry).success).toBe(true);
  });
  it.each(['name', 'organization', 'email', 'message'] as const)('requires %s', field => {
    expect(partnerSchema.safeParse({ ...validInquiry, [field]: '   ' }).success).toBe(false);
  });
  it('rejects an invalid email', () => {
    expect(partnerSchema.safeParse({ ...validInquiry, email: 'not-an-email' }).success).toBe(false);
  });
});