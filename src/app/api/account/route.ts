'use server'

import { prisma } from '@/lib/database/prisma'

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { name, email } = await req.json()
    try {
      const userExists = await prisma.user.findUnique({
        where: { email },
      })

      if (userExists) {
        return Response.json({ error: 'User already exists' }, { status: 400 })
      }

      const user = await prisma.user.create({
        data: {
          name,
          email,
        },
      })

      return Response.json(user, { status: 201 })
    } catch (error) {
      return Response.json({ error })
    }
  }
}
