'use client'

import LoadingTestimonyCard from '@/lib/components/loadingtestimonycard/LoadingTestimonyCard'
import BarSlider from '@/lib/components/sliders/BarSlider'
import { SLIDER_THEME_COLORS } from '@/lib/constants/slider-theme-colors.enum'
import { useItemsQuantity } from '@/lib/hooks/useItemsQuantity'

export default function TestimonyLoadingList() {
  const itemsQuantity = useItemsQuantity()

  return (
    <BarSlider color={SLIDER_THEME_COLORS.YELLOW} className="w-full">
      {[1, 2, 3, 4].map((key) => {
        return (
          <ul key={key} className="flex justify-center gap-16 w-full duration-700 ease-in-out">
            {Array(itemsQuantity > 3 ? 3 : itemsQuantity)
              .fill(0)
              .map((_, key) => {
                return <LoadingTestimonyCard key={key} />
              })}
          </ul>
        )
      })}
    </BarSlider>
  )
}
