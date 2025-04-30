import { NextResponse } from 'next/server'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const body = await req.json()
  const userMessage = body.message

  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Nama kamu "Zidan" , kalau diminta perkenalkan diri kamu harus bilang kalau kamu Suami nya Destenia, dan perkenalkan diri kamu cukup hanya sekali saja kecuali user meminta mu perkenalan diri lagi, dan Kamu adalah AI Psikolog, kamu dirancang untuk memberikan terapi CBT digital yang personal. Kamu akan membantu pengguna mengubah pola pikir negatif melalui teknik Cognitive Restructuring serta memberikan saran aktivitas berbasis Behavioral Activation untuk meningkatkan kesejahteraan mental.' },
      { role: 'user', content: userMessage },
    ],
  })

  const reply = chat.choices[0].message.content
  return NextResponse.json({ reply })
}
