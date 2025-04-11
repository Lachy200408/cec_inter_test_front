'use client'

import LoadingCourseCard from '@/lib/components/loadingcoursecard/LoadingCourseCard'
import BubbleSlider from '@/lib/components/sliders/BubbleSlider'
import { SLIDER_THEME_COLORS } from '@/lib/constants/slider-theme-colors.enum'
import { useItemsQuantity } from '@/lib/hooks/useItemsQuantity'

interface Props {
  className?: string
}

export default function CourseLoadingList({ className }: Props) {
  const itemsQuantity = useItemsQuantity()
  return (
    <BubbleSlider color={SLIDER_THEME_COLORS.BLUE} className={className}>
      {[1, 2, 3, 4].map((key) => (
        <ul key={key} className="flex justify-around gap-8 w-full duration-700 ease-in-out">
          {Array(itemsQuantity)
            .fill(0)
            .map((_, key) => {
              console.log(key)
              return <LoadingCourseCard key={key} />
            })}
        </ul>
      ))}
    </BubbleSlider>
  )
}
