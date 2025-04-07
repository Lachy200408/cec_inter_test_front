import { MagnifyingGlassIcon, ChevronDownIcon, UserIcon } from '@heroicons/react/24/outline'
import PrimaryButtonLink from '@/lib/components/links/PrimaryButtonLink'
import TertiaryButtonLink from '@/lib/components/links/TertiaryButtonLink'
import Logo from '@/lib/icons/Logo'
import { montserratFont } from '@/lib/fonts/montserrat'

export default function Header() {
  return (
    <header className="w-full h-24 bg-app-blue-500 flex justify-between items-center lg:px-12 md:px-8 px-4">
      <div className="flex gap-4 items-center">
        <Logo />
        <PrimaryButtonLink href="/" className="w-max text-app-blue-500">
          <MagnifyingGlassIcon className="size-6" />
          <span className={montserratFont.className}>Explora</span>
          <ChevronDownIcon className="size-5" />
        </PrimaryButtonLink>
      </div>

      <nav className="flex gap-4 items-center">
        <TertiaryButtonLink href="/" className="w-max">
          <span className={montserratFont.className}>Para estudiantes</span>
        </TertiaryButtonLink>
        <TertiaryButtonLink href="/" className="w-max">
          <span className={montserratFont.className}>Para profesores</span>
        </TertiaryButtonLink>
        <PrimaryButtonLink href="/" className="w-max text-app-blue-500">
          <UserIcon className="size-6" />
          <span className="font-bold">Acceder</span>
        </PrimaryButtonLink>
      </nav>
    </header>
  )
}
