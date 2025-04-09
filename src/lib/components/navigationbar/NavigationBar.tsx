import { cn } from '@/lib/utils/cn'

interface Props {
  color?: 'blue' | 'yellow'
}

export default function NavigationBar({ color = 'blue' }: Props) {
  return (
    <div
      className={cn(
        'w-[120px] h-[4px] overflow-hidden rounded-full relative',
        color === 'blue' ? 'bg-white' : 'bg-app-gray/15'
      )}
    >
      <div
        className={cn(
          'w-[40px] h-[4px] absolute top-0 left-0 rounded-full',
          color === 'blue' ? 'bg-app-blue-500' : 'bg-app-yellow-500'
        )}
      />
    </div>
  )
}
