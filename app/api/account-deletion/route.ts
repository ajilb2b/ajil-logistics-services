import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { email } = body as Record<string, unknown>;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return Response.json({ error: 'A valid email address is required' }, { status: 400 });
  }

  const { error } = await supabase.from('account_deletion_requests').insert({
    email: email.trim().toLowerCase(),
    submitted_at: new Date().toISOString(),
  });

  if (error) {
    console.error('Supabase insert error:', error.message);
    return Response.json({ error: 'Failed to submit request' }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 200 });
}
