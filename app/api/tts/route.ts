import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text, lang } = await req.json();

  if (!text || !lang) {
    return NextResponse.json({ error: "Missing text or lang" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "TTS API key not configured" }, { status: 500 });
  }

  // Malayalam: use ml-IN WaveNet voice; English: en-US WaveNet
  const isMalayalam = lang === "ml";
  const languageCode = isMalayalam ? "ml-IN" : "en-US";
  const voiceName = isMalayalam ? "ml-IN-Wavenet-A" : "en-US-Wavenet-F";

  const body = {
    input: { text },
    voice: { languageCode, name: voiceName },
    audioConfig: {
      audioEncoding: "MP3",
      speakingRate: 0.85,
    },
  };

  const response = await fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    const err = await response.text();
    console.error("Google TTS error:", err);
    return NextResponse.json({ error: "TTS request failed" }, { status: 502 });
  }

  const data = await response.json();
  // Return the base64-encoded MP3
  return NextResponse.json({ audioContent: data.audioContent });
}
