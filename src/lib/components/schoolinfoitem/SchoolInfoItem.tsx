import { CheckCircleIcon } from '@heroicons/react/16/solid'

interface Props {
  head: string
  children: React.ReactNode
}

export default function SchoolInfoItem({ head, children }: Props) {
  return (
    <>
      <h6 className="flex gap-4 items-center font-bold">
        <CheckCircleIcon className="size-6 text-app-yellow-500" />
        {head}
      </h6>
      <p>{children}</p>
    </>
  )
}
