import { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const fullName = formData.get('fullName') as string | null;
  const email = formData.get('email') as string | null;
  const phone = formData.get('phone') as string | null;
  const nationality = formData.get('nationality') as string | null;
  const city = formData.get('city') as string | null;
  const vehicle = formData.get('vehicle') as string | null;
  const experience = formData.get('experience') as string | null;
  const availability = formData.get('availability') as string | null;
  const startDate = formData.get('startDate') as string | null;
  const notes = formData.get('notes') as string | null;
  const cvFile = formData.get('cv') as File | null;

  if (!fullName || !email || !phone || !city || !vehicle || !experience || !availability) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  let cvUrl: string | null = null;
  let cvFileName: string | null = null;

  if (cvFile && cvFile.size > 0) {
    const maxSize = 5 * 1024 * 1024; // 5 MB
    if (cvFile.size > maxSize) {
      return Response.json({ error: 'CV file must be under 5 MB' }, { status: 400 });
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(cvFile.type)) {
      return Response.json({ error: 'CV must be a PDF or Word document' }, { status: 400 });
    }

    const ext = cvFile.name.split('.').pop() ?? 'pdf';
    const safeName = `${Date.now()}-${fullName.replace(/\s+/g, '-').toLowerCase()}.${ext}`;
    const bytes = await cvFile.arrayBuffer();

    const { error: uploadError } = await supabase.storage
      .from('driver-cvs')
      .upload(safeName, bytes, { contentType: cvFile.type, upsert: false });

    if (uploadError) {
      console.error('CV upload error:', uploadError.message);
      return Response.json({ error: 'Failed to upload CV. Please try again.' }, { status: 500 });
    }

    const { data: publicUrlData } = supabase.storage.from('driver-cvs').getPublicUrl(safeName);
    cvUrl = publicUrlData.publicUrl;
    cvFileName = cvFile.name;
  }

  const { error: dbError } = await supabase.from('driver_applications').insert({
    full_name: fullName,
    email,
    phone,
    nationality: nationality ?? null,
    city,
    vehicle_type: vehicle,
    experience_years: experience,
    availability,
    start_date: startDate ?? null,
    notes: notes ?? null,
    cv_url: cvUrl,
    cv_file_name: cvFileName,
  });

  if (dbError) {
    console.error('DB insert error:', dbError.message);
    return Response.json({ error: 'Failed to save application. Please try again.' }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 200 });
}
