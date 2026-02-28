import { NextRequest, NextResponse } from "next/server";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

// ml-IN-MidhunNeural = natural Malayalam male voice (Microsoft Edge)
// en-US-JennyNeural  = natural English female voice
const VOICE_MAP: Record<string, string> = {
  ml: "ml-IN-MidhunNeural",
  en: "en-US-JennyNeural",
};

export async function POST(req: NextRequest) {
  const { text, lang } = await req.json();

  if (!text || !lang) {
    return NextResponse.json({ error: "Missing text or lang" }, { status: 400 });
  }

  const voice = VOICE_MAP[lang] ?? VOICE_MAP["en"];

  try {
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const audioBuffer: Buffer[] = [];
    const { audioStream } = await tts.toStream(text);

    await new Promise<void>((resolve, reject) => {
      audioStream.on("data", (chunk: Buffer) => audioBuffer.push(chunk));
      audioStream.on("end", resolve);
      audioStream.on("error", reject);
    });

    const mp3 = Buffer.concat(audioBuffer);
    const audioContent = mp3.toString("base64");

    return NextResponse.json({ audioContent });
  } catch (err) {
    console.error("msedge-tts error:", err);
    return NextResponse.json({ error: "TTS failed" }, { status: 502 });
  }
}
