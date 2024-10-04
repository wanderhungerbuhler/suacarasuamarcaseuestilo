import Image from 'next/image'

import Logo from '@/app/assets/logo.svg'

export function Header() {
  return (
    <header className="absolute z-50 m-auto flex w-full items-center justify-center p-5">
      <Image src={Logo} alt="Logo" quality={100} />
    </header>
  )
}
