import { SLIDER_THEME_COLORS } from '@/lib/constants/slider-theme-colors.enum'
import { cn } from '@/lib/utils/cn'

interface Props {
  color?: SLIDER_THEME_COLORS
  currentPage: number
  pages: number
}

export default function NavigationBar({
  color = SLIDER_THEME_COLORS.BLUE,
  currentPage,
  pages,
}: Props) {
  const width = `${100 / pages}%`
  const left = `${(currentPage / pages) * 100}%`
  return (
    <div
      className={cn(
        'w-[120px] h-[4px] overflow-hidden rounded-full relative',
        color === SLIDER_THEME_COLORS.BLUE ? 'bg-white' : 'bg-app-gray/15'
      )}
    >
      <div
        className={cn(
          'h-[4px] absolute top-0 rounded-full transition-all duration-300',
          color === SLIDER_THEME_COLORS.BLUE ? 'bg-app-blue-500' : 'bg-app-yellow-500'
        )}
        style={{ width: width, left: left }}
      />
    </div>
  )
}
