'use server'

import { app } from '@/lib/axios'

type SendEmailRegisterProps = {
  name: string
  email: string
}

export async function SendEmailRegister(data: SendEmailRegisterProps) {
  await app.post(`${process.env.NEXT_PUBLIC_API}/send`, data)
}
