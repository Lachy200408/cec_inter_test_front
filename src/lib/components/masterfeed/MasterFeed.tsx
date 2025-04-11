'use client'

import type { MasterType } from '@/lib/types/master-type'
import RectDecorator from '@/lib/components/decorators/RectDecorator'
import MasterCard from '@/lib/components/mastercard/MasterCard'
import BarSlider from '@/lib/components/sliders/BarSlider'
import MasterLoadingList from '@/lib/components/masterloadinglist/MasterLoadingList'
import ErrorFeedback from '@/lib/components/errorfeedback/ErrorFeedback'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'
import { splitArray } from '@/lib/utils/splitArray'
import { useApi } from '@/lib/hooks/useApi'
import { useItemsQuantity } from '@/lib/hooks/useItemsQuantity'
import { SLIDER_THEME_COLORS } from '@/lib/constants/slider-theme-colors.enum'

export default function MasterFeed() {
  const { data: masters, error, loading } = useApi<Array<MasterType>>('/masters?q=9')
  const itemsQuantity = useItemsQuantity()
  const masterList = splitArray(masters ?? [], itemsQuantity > 3 ? 3 : itemsQuantity)

  return (
    <article
      className={cn(
        'relative max-w-320 w-full h-md bg-app-blue-500/15 rounded-xl grid justify-items-center gap-8 px-16 py-12 overflow-x-hidden',
        montserratFont.className
      )}
    >
      <h2>
        Nuestros profesores
        <RectDecorator className="bg-app-blue-500 mt-3 w-14" />
      </h2>
      {loading && <MasterLoadingList />}
      {masters && masters.length > 0 && (
        <BarSlider color={SLIDER_THEME_COLORS.BLUE} className="w-full">
          {masterList.map((list, index) => {
            return (
              <ul key={index} className="flex justify-center gap-8 w-full duration-700 ease-in-out">
                {list.map((master, index) => {
                  return <MasterCard key={index} {...master} />
                })}
              </ul>
            )
          })}
        </BarSlider>
      )}
      {(error || (masters && masters.length === 0)) && (
        <ErrorFeedback
          error="No se ha podido cargar los profesores"
          feedback="Recargue la página para verlos"
        />
      )}
    </article>
  )
}
