import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils/cn'

interface Props {
  disabled?: boolean
  className?: string
}

export default function SliderButton({ className, disabled = false }: Props) {
  return (
    <div
      className={cn(
        'bg-white text-app-blue-500 grid place-items-center p-2 cursor-pointer rounded-full',
        className,
        disabled && 'pointer-events-none opacity-50'
      )}
    >
      <ChevronRightIcon className="size-6 stroke-[4px]" />
    </div>
  )
}
