/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

import Footer from './components/footer'

export function WelcomeEmail({
  name = 'Wander Hungerbühler',
  email = 'wander@suacarasuamarcaseuestilo.com',
}: {
  name: string | null
  email: string
}) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Sua Cara, Sua Marca, Seu Estilo!</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
            <Heading className="mx-0 my-7 p-0 text-center text-xl font-semibold text-black">
              Welcome to Sua Cara, Sua Marca, Seu Estilo!
            </Heading>
            <Section>
              <Img
                src="https://storage.googleapis.com/assets.dabliw.com/137521f3-cda8-4784-8a56-04ab178145d1.png"
                alt="Sua Cara, Sua Marca, Seu Estilo!"
                className="max-w-[500px]"
              />
            </Section>
            <Section className="my-8">
              <Text className="px-5 text-sm leading-6 text-black">
                {name && `${name}`},
              </Text>

              <Text className="px-5 text-sm leading-6 text-black">
                Obrigado por ter o interesse em ler o 1º Capítulo
              </Text>

              <Text className="px-5 text-sm leading-6 text-black">
                Meu nome é Wander Hungerbühler, e eu sou o fundador da marca{' '}
                <b>Sua Cara, Sua Marca, Seu Estilo.</b>
              </Text>

              <Text className="px-5 text-sm leading-6 text-black">
                Não se preocupe, a intenção é que você se sinta confortável e
                faça uma leitura das primeiras páginas.
              </Text>

              <Container className="m-auto flex items-center justify-center">
                <Button
                  href="https://storage.googleapis.com/assets.dabliw.com/1-capt-ebook-suacara-suamarca-seuestilo.pdf"
                  target="_blank"
                  className="rounded-full bg-black px-5 py-2 text-center text-white outline-none"
                >
                  Fazer o download do 1º Capítulo
                </Button>
              </Container>

              <Text className="px-5 text-sm leading-6 text-black">
                Deixe-me saber se você tiver alguma dúvida ou feedback. Fico
                sempre feliz em ajudar!
              </Text>

              <Text className="px-5 text-sm font-light leading-6 text-gray-400">
                Wander from Sua Cara, Sua Marca, Seu Estilo
              </Text>
            </Section>

            <Footer email={email} marketing />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
