import { MagnifyingGlassIcon, ChevronDownIcon, UserIcon } from '@heroicons/react/24/outline'
import PrimaryButtonLink from '@/lib/components/links/PrimaryButtonLink'
import TertiaryButtonLink from '@/lib/components/links/TertiaryButtonLink'
import Logo from '@/lib/icons/Logo'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function Header() {
  return (
    <header className={cn('bg-app-blue-500 grid place-items-center', montserratFont.className)}>
      <div className="max-w-320 w-full h-24 flex justify-between items-center lg:px-12 md:px-8 px-4">
        <div className="flex gap-4 items-center">
          <Logo className="w-auto h-12" />
          <PrimaryButtonLink href="/" className="w-max text-app-blue-500 px-3">
            <MagnifyingGlassIcon className="size-6" />
            Explora
            <ChevronDownIcon className="size-5" />
          </PrimaryButtonLink>
        </div>

        <nav className="md:flex gap-4 items-center hidden">
          <TertiaryButtonLink href="/" className="w-max">
            Para estudiantes
          </TertiaryButtonLink>
          <TertiaryButtonLink href="/" className="w-max">
            Para profesores
          </TertiaryButtonLink>
          <PrimaryButtonLink href="/" className="w-max text-app-blue-500 px-3 font-medium">
            <UserIcon className="size-6" />
            Acceder
          </PrimaryButtonLink>
        </nav>

        <div className="dropdown dropdown-end md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="dropdown-btn rounded-lg bg-app-yellow-500 px-3 py-1"
          >
            <ChevronDownIcon className="size-5" />
          </div>
          <nav className="flex flex-col gap-2 items-end dropdown-content bg-white rounded-lg p-2 shadow-lg">
            <PrimaryButtonLink href="/" className="w-max text-app-blue-500 px-3 font-medium">
              Para estudiantes
            </PrimaryButtonLink>
            <PrimaryButtonLink href="/" className="w-max text-app-blue-500 px-3 font-medium">
              Para profesores
            </PrimaryButtonLink>
            <PrimaryButtonLink href="/" className="w-max text-app-blue-500 px-3 font-medium">
              <UserIcon className="size-6" />
              Acceder
            </PrimaryButtonLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
