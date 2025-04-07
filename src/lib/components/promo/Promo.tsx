import Image from 'next/image'

export default function Promo() {
  return (
    <article className="w-full p-12 h-52 bg-app-blue-500 rounded-lg flex flex-col items-center gap-4 relative">
      <Image
        src={'/laptop.webp'}
        alt=""
        width={402}
        height={308}
        className="absolute top-0 left-16 w-56"
      />
      <Image
        src={'/headphones.png'}
        alt=""
        width={360}
        height={99}
        className="absolute top-1/2 -right-16 -translate-y-1/2 h-20 w-auto"
      />
      <h1>A un click de aprender</h1>
      <p className="max-w-64 text-wrap text-center">
        Prueba nuestro nuevo curso de marketing para principiantes
      </p>
    </article>
  )
}
