import { cn } from '@/lib/utils/cn'

interface Props {
  active?: boolean
  className?: string
  children: React.ReactNode
}

export default function CourseNavigationItem({ active = false, className, children }: Props) {
  return (
    <div
      className={cn(
        active ? 'text-app-blue bg-app-blue-500/15' : 'text-app-gray bg-app-gray/15',
        'flex items-center gap-2 py-4 px-8 rounded-xl h-max',
        className
      )}
    >
      {children}
    </div>
  )
}
