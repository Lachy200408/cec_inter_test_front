import SecondaryLogo from '@/lib/icons/SecondaryLogo'
import Link from 'next/link'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function Footer() {
  return (
    <footer className="bg-white min-h-md shadow-footer pt-20 pb-8 grid place-items-center max-w-svw w-full">
      <div className="flex flex-col items-center max-w-360 w-full">
        <section className="flex-1 grid grid-cols-[repeat(4,minmax(128px,1fr))] grid-rows-[repeat(3,auto)] gap-8 w-[90vw] md:w-full px-4 md:px-20 overflow-x-auto scroll-soft box-border">
          <SecondaryLogo />
          <p className={cn(montserratFont.className, 'text-app-blue-500 uppercase')}>Explora</p>
          <p className={cn(montserratFont.className, 'text-app-blue-500 uppercase')}>Acerca de</p>
          <p className={cn(montserratFont.className, 'text-app-blue-500 uppercase')}>Contáctanos</p>

          {[1, 2, 3, 4].map((key) => (
            <p key={key} className={cn('text-app-gray', montserratFont.className)}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quia perspiciatis a
            </p>
          ))}

          <Link
            href="/"
            className="w-max text-app-blue-500 self-center border border-app-blue-500 py-1 px-4 rounded-md"
          >
            Inscribirse
          </Link>
        </section>
        <div className="w-full h-px bg-app-gray/25 my-16" />
        <p className="pointer-events-none text-app-gray text-center mb-2 px-4 box-border">
          © CEC. 2024, Maccarian. Todos los derechos reservados
        </p>
        <p className="pointer-events-none text-app-gray text-center max-w-6xl w-full mx-auto px-4 box-border">
          Cuando visita o interactúa con nuestros sitios, servicios o herramientas, nosotros o
          nuestros proveedores de servicios autorizados podemos utilizar cookies para almacenar
          información que le ayude a brindarle una experiencia mejor, más rápida y segura y con
          fines de marketing.
        </p>
      </div>
    </footer>
  )
}
