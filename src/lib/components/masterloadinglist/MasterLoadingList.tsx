'use client'

import LoadingMasterCard from '@/lib/components/loadingmastercard/LoadingMasterCard'
import BarSlider from '@/lib/components/sliders/BarSlider'
import { SLIDER_THEME_COLORS } from '@/lib/constants/slider-theme-colors.enum'
import { useItemsQuantity } from '@/lib/hooks/useItemsQuantity'

export default function MasterLoadingList() {
  const itemsQuantity = useItemsQuantity()

  return (
    <BarSlider color={SLIDER_THEME_COLORS.BLUE} className="w-full">
      {[1, 2, 3, 4].map((key) => {
        return (
          <ul key={key} className="flex justify-center gap-16 w-full duration-700 ease-in-out">
            {Array(itemsQuantity > 3 ? 3 : itemsQuantity)
              .fill(0)
              .map((_, key) => {
                return <LoadingMasterCard key={key} />
              })}
          </ul>
        )
      })}
    </BarSlider>
  )
}
