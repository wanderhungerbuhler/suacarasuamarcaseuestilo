'use server'

import { resend } from '@/lib/resend'

import { WelcomeEmail } from '../../../../emails/welcome'

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { name, email } = await req.json()
    try {
      const { data, error } = await resend.emails.send({
        from: 'Wander Hungerbühler <no-reply@suacarasuamarcaseuestilo.com>',
        to: email,
        subject: '1º Capítulo do E-book: Sua Cara, Sua Marca, Seu Estilo!',
        react: WelcomeEmail({
          name,
          email,
        }) as React.ReactElement,
      })

      if (error) {
        return Response.json({ error: error.message }, { status: 403 })
      }

      return Response.json(data, { status: 200 })
    } catch (error) {
      return Response.json({ error })
    }
  }
}
