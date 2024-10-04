'use client'
import React from 'react'

import { BackgroundBeams } from '@/components/ui/background-beams'

import { Header } from './header'

export function BackgroundBeamsPage() {
  return (
    <>
      <Header />

      <div className="relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md bg-neutral-950 antialiased">
        <div className="mx-auto p-4">
          <h1 className="relative z-0 bg-gradient-to-b from-neutral-200 to-neutral-600  bg-clip-text text-center font-sans text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
            Leia o 1º Capítulo
          </h1>
          <p></p>
          <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
            Não se preocupe, a intenção é que você se sinta confortável e faça
            uma leitura das primeiras páginas. Deixe o seu melhor e-mail para
            que possamos enviar o 1º capítulo do livro.
          </p>
        </div>

        <BackgroundBeams />
      </div>
    </>
  )
}
