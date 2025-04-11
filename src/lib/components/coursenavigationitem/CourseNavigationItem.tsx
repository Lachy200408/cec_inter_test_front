import { cn } from '@/lib/utils/cn'

interface Props {
  active?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function CourseNavigationItem({
  active = false,
  onClick = () => {},
  className,
  children,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        active ? 'text-app-blue bg-app-blue-500/15' : 'text-app-gray bg-app-gray/15',
        'flex items-center gap-2 py-4 px-8 rounded-xl h-max w-[160px] justify-center uppercase cursor-pointer',
        className
      )}
    >
      {children}
    </button>
  )
}
