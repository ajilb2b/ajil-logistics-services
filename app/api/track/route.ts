import { NextRequest } from 'next/server';

/**
 * Public order tracking. Reads the live status from the WMS public tracking API
 * (the single source of truth) and maps it into the shape the tracking UI
 * expects. No auth — the AWB is the unguessable key; the WMS returns a safe
 * projection only (area, not full address).
 */
const WMS_API_BASE =
  process.env.WMS_API_BASE || 'https://api-production-f6bed.up.railway.app/api';

type WmsEvent = { status: string; label: string; timestamp: string };

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')?.trim().toUpperCase();

  if (!id || id.length < 4) {
    return Response.json({ error: 'Invalid tracking number' }, { status: 400 });
  }

  try {
    const res = await fetch(`${WMS_API_BASE}/public/track/${encodeURIComponent(id)}`, {
      headers: { accept: 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) return Response.json({ found: false }, { status: 200 });

    const data = (await res.json()) as
      | {
          found: true;
          tracking: {
            awb: string;
            temuOrderId: string | null;
            brand: string | null;
            recipientArea: string | null;
            status: string;
            estimatedDelivery: string | null;
            events: WmsEvent[];
          };
        }
      | { found: false };

    if (!data.found || !data.tracking) return Response.json({ found: false }, { status: 200 });

    const t = data.tracking;
    const eventsAsc = Array.isArray(t.events) ? t.events : [];
    // The WMS returns events oldest-first; the UI renders newest-first.
    const events = [...eventsAsc]
      .reverse()
      .map((e) => ({ label: e.label, timestamp: e.timestamp }));
    const createdAt = eventsAsc[0]?.timestamp ?? new Date().toISOString();

    const delivery = {
      tracking_number: t.awb,
      order_id: t.temuOrderId ?? undefined,
      status: t.status, // full public status; the UI stepper understands the whole set
      recipient_area: t.recipientArea ?? undefined,
      estimated_delivery: t.estimatedDelivery ?? undefined,
      brand_name: t.brand ?? undefined,
      events,
      created_at: createdAt,
    };

    return Response.json({ found: true, delivery }, { status: 200 });
  } catch {
    return Response.json({ found: false }, { status: 200 });
  }
}
