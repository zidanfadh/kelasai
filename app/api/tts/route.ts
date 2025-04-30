import { NextResponse } from 'next/server'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { text } = await req.json()

  const mp3 = await openai.audio.speech.create({
    model: 'tts-1',
    voice: 'alloy', // atau 'shimmer', 'echo', 'onyx', 'fable'
    input: text,
  })

  const buffer = Buffer.from(await mp3.arrayBuffer())

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'audio/mpeg',
      'Content-Length': buffer.length.toString(),
    },
  })
}
