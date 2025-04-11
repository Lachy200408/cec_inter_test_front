import type { CourseType } from '@/lib/types/courses-type'
import { UserCircleIcon, CheckCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export default function CourseCard({
  title,
  description,
  degree,
  rating,
  users,
  college,
}: CourseType) {
  return (
    <article className="w-[260px] h-[336px] bg-white rounded-2xl flex flex-col shadow-md">
      <figure className="w-full h-[172px] overflow-hidden relative">
        <Image
          src={'/course.png'}
          alt="Curso"
          width={260}
          height={172}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 w-max bg-white/75 rounded-xl py-1 px-2 flex items-center gap-2">
          <CheckCircleIcon className="size-4" />
          {college}
        </span>
      </figure>
      <div className="w-full flex-1 grid grid-cols-2 grid-rows-[1fr,auto] p-4">
        <div className="col-span-2">
          <h6 className="font-medium max-w-48 text-balance">{title}</h6>
          <small className="text-app-gray three-line-clamp max-w-56 text-balance">
            {description}
          </small>
        </div>
        <p className="text-app-blue-500 self-center">{degree}</p>
        <div className="flex items-center gap-2 self-center justify-self-end">
          <span className="flex items-center gap-1">
            {rating} <span className="mask mask-star-2 bg-app-yellow-500 size-4" />
          </span>
          <span className="flex items-center gap-1">
            {users} <UserCircleIcon className="size-4 text-app-blue-500" />
          </span>
        </div>
      </div>
    </article>
  )
}
