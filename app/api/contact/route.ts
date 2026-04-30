import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { firstName, lastName, company, email, interests, message } = body as Record<string, unknown>;

  if (!firstName || !lastName || !company || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await supabase.from('contact_submissions').insert({
    first_name: firstName,
    last_name: lastName,
    company,
    email,
    interests: interests ?? [],
    message,
  });

  if (error) {
    console.error('Supabase insert error:', error.message);
    return Response.json({ error: 'Failed to save submission' }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 200 });
}
