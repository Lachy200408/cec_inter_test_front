import Image from 'next/image'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function Promo() {
  return (
    <article className="max-w-320 w-full p-12 h-52 bg-app-blue-500 rounded-lg flex flex-col items-center gap-4 relative max-lg:overflow-hidden">
      <Image
        src={'/laptop.webp'}
        alt=""
        width={402}
        height={308}
        className="absolute top-0 max-lg:-left-8 lg:left-16 w-32 md:w-56"
      />
      <Image
        src={'/headphones.png'}
        alt=""
        width={360}
        height={99}
        className="absolute md:top-1/2 max-md:bottom-0 -right-16 md:-translate-y-1/2 max-md:translate-y-1/4 h-16 md:h-20 w-auto"
      />
      <h3 className={cn('text-white relative z-50', montserratFont.className)}>
        A un click de aprender
      </h3>
      <p
        className={cn(
          'text-white relative z-50 max-w-64 text-wrap text-center',
          montserratFont.className
        )}
      >
        Prueba nuestro nuevo curso de marketing para principiantes
      </p>
    </article>
  )
}
