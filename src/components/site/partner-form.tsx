import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { partnerSchema, type PartnerValues } from '@/lib/partner-schema';
export function PartnerForm({ kind }: { kind: string }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PartnerValues>({ resolver: zodResolver(partnerSchema), defaultValues: { name: '', organization: '', email: '', message: '' } });
  return <form noValidate onSubmit={handleSubmit(() => {
    toast.success('Demo submission successful', { description: 'Your inquiry has not been sent or stored.' });
    reset();
  })} className="mt-8 space-y-6">
    <div className="grid gap-6 sm:grid-cols-2">
      {(['name', 'organization'] as const).map(field => <div key={field} className="space-y-2"><Label htmlFor={`${kind}-${field}`}>{field === 'name' ? 'Name' : 'Organization'} <span className="text-muted-foreground">*</span></Label><Input id={`${kind}-${field}`} autoComplete={field === 'name' ? 'name' : 'organization'} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${kind}-${field}-error` : undefined} {...register(field)} />{errors[field] && <p id={`${kind}-${field}-error`} role="alert" className="text-xs text-destructive">{errors[field]?.message}</p>}</div>)}
    </div>
    <div className="space-y-2"><Label htmlFor={`${kind}-email`}>Email <span className="text-muted-foreground">*</span></Label><Input id={`${kind}-email`} type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${kind}-email-error` : undefined} {...register('email')} />{errors.email && <p id={`${kind}-email-error`} role="alert" className="text-xs text-destructive">{errors.email.message}</p>}</div>
    <div className="space-y-2"><Label htmlFor={`${kind}-message`}>Message <span className="text-muted-foreground">*</span></Label><Textarea id={`${kind}-message`} rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${kind}-message-error` : undefined} {...register('message')} />{errors.message && <p id={`${kind}-message-error`} role="alert" className="text-xs text-destructive">{errors.message.message}</p>}</div>
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><p className="max-w-xs text-xs leading-relaxed text-muted-foreground">Demonstration only. Submissions are not sent or stored.</p><Button type="submit" size="lg">Submit Inquiry <ArrowUpRight /></Button></div>
  </form>;
}
