import { XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

interface Props {
  className?: string
  error: string
  feedback: string
}

export default function ErrorFeedback({ className, error, feedback }: Props) {
  return (
    <div className={className}>
      <h4 className="relative z-10 py-4 px-8 w-max h-max text-center text-red-500 bg-red-50 border border-red-500 rounded-xl font-medium flex items-center justify-center gap-2">
        <XCircleIcon className="size-12 " />
        {error}
      </h4>
      <h4 className="text-center text-app-blue-500 bg-app-blue-50/15 border border-app-blue-500 rounded-xl font-medium mt-4 py-4 px-8 w-full flex items-center justify-center gap-2">
        <InformationCircleIcon className="size-8" />
        {feedback}
      </h4>
    </div>
  )
}
