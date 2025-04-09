import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils/cn'

interface Props {
  disabled?: boolean
  className?: string
  onClick: () => void
}

export default function SliderButton({ onClick, className, disabled = false }: Props) {
  return (
    <button
      className={cn(
        'bg-white text-app-blue-500 grid place-items-center p-2 cursor-pointer rounded-full',
        className,
        disabled && 'pointer-events-none opacity-50'
      )}
      onClick={onClick}
    >
      <ChevronRightIcon className="size-6 stroke-[4px]" />
    </button>
  )
}
