import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')?.trim().toUpperCase();

  if (!id || id.length < 4) {
    return Response.json({ error: 'Invalid tracking number' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('deliveries')
    .select('tracking_number, status, recipient_area, estimated_delivery, events, created_at, brand_name')
    .eq('tracking_number', id)
    .single();

  if (error || !data) {
    return Response.json({ found: false }, { status: 200 });
  }

  return Response.json({ found: true, delivery: data }, { status: 200 });
}
