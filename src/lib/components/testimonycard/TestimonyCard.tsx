import type { TestimonyType } from '@/lib/types/testimony-type'
import Image from 'next/image'
import StarRating from '@/lib/components/starrating/StarRating'
import { cn } from '@/lib/utils/cn'

interface Props extends TestimonyType {
  className?: string
}

export default function TestimonyCard({ name, testimony, occupation, rating, className }: Props) {
  return (
    <article
      className={cn(
        'w-[360px] px-6 py-8 flex flex-wrap items-center gap-y-4 gap-x-6 rounded-xl',
        className
      )}
    >
      <StarRating rating={rating} />
      <p className="w-full text-gray-500 three-line-clamp">{testimony}</p>
      <Image
        src={'/master-1.webp'}
        alt={name}
        width={100}
        height={100}
        className="size-16 rounded-full"
      />
      <div className="flex-1">
        <h6 className="font-medium">{name}</h6>
        <p className="text-gray-500">{occupation}</p>
      </div>
    </article>
  )
}
