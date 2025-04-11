'use client'

import type { TestimonyType } from '@/lib/types/testimony-type'
import RectDecorator from '@/lib/components/decorators/RectDecorator'
import TestimonyLoadingList from '@/lib/components/testimonyloadinglist/TestimonyLoadingList'
import ErrorFeedback from '@/lib/components/errorfeedback/ErrorFeedback'
import BarSlider from '@/lib/components/sliders/BarSlider'
import TestimonyCard from '@/lib/components/testimonycard/TestimonyCard'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'
import { splitArray } from '@/lib/utils/splitArray'
import { useApi } from '@/lib/hooks/useApi'
import { useItemsQuantity } from '@/lib/hooks/useItemsQuantity'
import { SLIDER_THEME_COLORS } from '@/lib/constants/slider-theme-colors.enum'

export default function Testimonies() {
  const { data: testimonies, error, loading } = useApi<Array<TestimonyType>>('/testimonies?q=9')
  const itemsQuantity = useItemsQuantity()
  const testimonyList = splitArray(testimonies ?? [], itemsQuantity)

  return (
    <article
      className={cn(
        'relative max-w-320 w-full h-md grid justify-items-center gap-8 px-16 py-12 overflow-x-hidden',
        montserratFont.className
      )}
    >
      <h2>
        Testimonios
        <RectDecorator className="bg-app-blue-500 mt-3 w-14" />
      </h2>
      {loading && <TestimonyLoadingList />}
      {testimonies && testimonies.length > 0 && (
        <BarSlider color={SLIDER_THEME_COLORS.YELLOW} className="w-full">
          {testimonyList.map((list, index) => {
            return (
              <ul key={index} className="flex justify-center gap-8 w-full duration-700 ease-in-out">
                {list.map((testimony, index) => {
                  return (
                    <TestimonyCard
                      key={testimony.id}
                      className={
                        index % 2 === 0
                          ? 'bg-app-yellow-500/15'
                          : 'bg-app-blue-500 **:text-white/80'
                      }
                      {...testimony}
                    />
                  )
                })}
              </ul>
            )
          })}
        </BarSlider>
      )}
      {(error || (testimonies && testimonies.length === 0)) && (
        <ErrorFeedback
          error="No se ha podido cargar los testimonios"
          feedback="Recargue la página para verlos"
        />
      )}
    </article>
  )
}
