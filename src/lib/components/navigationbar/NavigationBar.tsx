import { cn } from '@/lib/utils/cn'

interface Props {
  color?: 'blue' | 'yellow'
  currentPage: number
  pages: number
}

export default function NavigationBar({ color = 'blue', currentPage, pages }: Props) {
  const width = `${100 / pages}%`
  const left = `${(currentPage / pages) * 100}%`
  return (
    <div
      className={cn(
        'w-[120px] h-[4px] overflow-hidden rounded-full relative',
        color === 'blue' ? 'bg-white' : 'bg-app-gray/15'
      )}
    >
      <div
        className={cn(
          'h-[4px] absolute top-0 rounded-full transition-all duration-300',
          color === 'blue' ? 'bg-app-blue-500' : 'bg-app-yellow-500'
        )}
        style={{ width: width, left: left }}
      />
    </div>
  )
}
