import RectDecorator from '@/lib/components/decorators/RectDecorator'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'
import PrimaryButtonLink from '../links/PrimaryButtonLink'
import Image from 'next/image'

export default function Calling() {
  return (
    <article className="max-w-320 w-full h-[424px] px-12 py-16 bg-app-yellow-500/15 rounded-lg flex justify-between items-start">
      <div className="grid gap-6 content-center h-full">
        <h1
          className={cn('max-w-lg text-black uppercase font-extrabold', montserratFont.className)}
        >
          ¡Aprende
          <br />
          con nosotros!
          <RectDecorator className="bg-app-yellow-500 mt-3 w-16" />
        </h1>
        <h5
          className={cn('max-w-md taxt-balance text-app-gray font-light', montserratFont.className)}
        >
          ¿Listo para el siguiente paso en tu desarrollo profesional? Únete a nuestro programa y
          descubre nuevas oportunidades.
        </h5>
        <PrimaryButtonLink href="/" className="w-max text-white font-bold px-8">
          Empieza ahora
        </PrimaryButtonLink>
      </div>
      <figure className="relative w-96 h-full mt-2 me-8 overflow-visible">
        <Image
          src={'/chica-1.webp'}
          alt="Comienza ahora"
          width={720}
          height={713}
          className="w-96 absolute bottom-0 -left-14 z-10"
        />
        <div className="absolute bottom-0 left-0 w-[340px] h-sm bg-app-yellow-500 rounded-xl z-5" />
        <div className="absolute -bottom-6 left-8 w-[340px] h-sm bg-app-blue-500 rounded-xl" />
      </figure>
    </article>
  )
}
