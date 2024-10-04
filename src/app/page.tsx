/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import EbookAberto from '@/app/assets/ebook-aberto.png'
import EbookPedra from '@/app/assets/ebook-pedra.png'
import { BackgroundBeamsPage } from '@/components/backgroundbeams'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { app } from '@/lib/axios'
import { cn } from '@/lib/utils'

const validationRegisterSchema = z.object({
  name: z
    .string({
      message: 'O Nome e Sobrenome é obrigatório',
    })
    .min(3, {
      message: 'Nome muito curto, precisa ter pelo menos 3 caracters',
    }),
  email: z
    .string({
      message: 'O E-mail é obrigatório',
    })
    .email({ message: 'E-mail inválido' }),
})

type ValidationRegisterSchema = z.infer<typeof validationRegisterSchema>

export default function Home() {
  const form = useForm<ValidationRegisterSchema>({
    resolver: zodResolver(validationRegisterSchema),
  })

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const response = await app.post('/account', data)

      if (response.status === 201) {
        await app.post('/send', {
          name: data.name,
          email: data.email,
        })
        form.reset()
        toast.success(
          'Verifique o seu e-mail para fazer o download do 1º capítulo',
        )
      }
    } catch (error: any) {
      console.error(error)
      toast.error('Já existe um usuário com esse e-mail', {
        description: 'Provavelmente ele já recebeu a versão do e-book',
      })
    }
  })

  return (
    <div className="">
      <BackgroundBeamsPage />

      <Form {...form}>
        <form onSubmit={onSubmit}>
          <div className="relative m-auto -mt-52 w-[90%] md:w-1/3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                      <LabelInputContainer>
                        <Label htmlFor="name">Nome e sobrenome</Label>
                        <Input
                          id="name"
                          placeholder="Wander Hungerbühler"
                          type="text"
                          {...field}
                        />
                      </LabelInputContainer>
                    </div>
                  </FormControl>
                  <FormMessage className="block pb-4" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                      <LabelInputContainer>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          placeholder="wander@example.com"
                          type="text"
                          {...field}
                        />
                      </LabelInputContainer>
                    </div>
                  </FormControl>
                  <FormMessage className="block pb-4" />
                </FormItem>
              )}
            />
            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Fazer download
              <BottomGradient />
            </button>
          </div>
        </form>
      </Form>

      <div className="m-auto mt-72 flex w-1/2 flex-col gap-5">
        <h3 className="mb-10 text-center text-3xl font-semibold uppercase">
          Já pensou em montar seu negócio
        </h3>
        <span className="relative z-0 block bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-5xl font-bold uppercase tracking-tighter text-transparent">
          Mas acha que é necessário muito dinheiro para isso?
        </span>
        <p className="text-center text-base text-zinc-400">
          Esse e-book, te prova que é possível, iniciar com pouco. E como novos
          insights, irão surgir a partir de cada leitura.
        </p>
      </div>

      <div className="m-auto mt-[20rem] w-[90%] md:grid md:w-1/2 md:grid-cols-2">
        <div>
          <span className="relative z-0 block bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text font-sans text-5xl font-bold uppercase tracking-tighter text-transparent">
            Tire a PEDRA do seu caminho!
          </span>
          <p className="text-base text-zinc-400">
            Saia da sua zona de conforto e jogue para bem longe, tudo aquilo que
            te desmotivou. A pedra pode até existir, mas não permita que ela
            continue no seu caminho!
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <Image
            src={EbookPedra}
            width={700}
            height={700}
            alt="Ebook"
            quality={100}
          />
        </div>
      </div>

      <div className="m-auto mt-[20rem] flex flex-col items-center justify-center md:w-1/2">
        <div>
          <p className="text-3xl font-semibold uppercase text-white">
            146 Página de muitos
          </p>
          <span className="relative z-0 block bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-7xl font-bold uppercase tracking-tighter text-transparent">
            Insights
          </span>
        </div>

        <div className="flex">
          <Image
            src={EbookAberto}
            width={700}
            height={700}
            alt="Ebook"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  )
}
