import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, pin, phone, state, district, lang } = await req.json();

    const name = `${firstName.trim()} ${lastName.trim()}`;
    const { data, error } = await supabase
      .from("users")
      // @ts-ignore
      .insert({
        name,
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim().toLowerCase(),
        pin,
        phone: phone.trim(),
        state: state || null,
        district: district ?? null,
        preferred_lang: lang || "en",
      })
      .select("id, name")
      .single<{ id: string; name: string }>();

    if (error) {
      return NextResponse.json({ error: error.message, code: error.code }, { status: 400 });
    }

    return NextResponse.json({ user: data });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
