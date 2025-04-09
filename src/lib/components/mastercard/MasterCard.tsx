import type { MasterType } from '@/lib/types/master-type'
import Image from 'next/image'

export default function MasterCard({ name, description, image, workrole }: MasterType) {
  return (
    <article className="w-[360px] bg-white px-6 py-8 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-lg">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-2xl w-[100px] h-[100px]"
      />
      <div className="flex-2/4">
        <h6 className="font-medium">{name}</h6>
        <p className="text-gray-500">{workrole}</p>
      </div>
      <p className="w-full text-gray-500 three-line-clamp">{description}</p>
    </article>
  )
}
