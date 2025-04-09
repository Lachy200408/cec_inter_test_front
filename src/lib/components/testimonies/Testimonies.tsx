import RectDecorator from '@/lib/components/decorators/RectDecorator'
import BarSlider from '@/lib/components/barslider/BarSlider'
import TestimonyCard from '@/lib/components/testimonycard/TestimonyCard'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'
import { testimonies } from '@/lib/mocks/testimonies'

export default function Testimonies() {
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
      <BarSlider color="yellow">
        {testimonies.map((testimony, index) => {
          return (
            <TestimonyCard
              key={testimony.id}
              className={
                index % 2 === 0 ? 'bg-app-yellow-500/15' : 'bg-app-blue-500 **:text-white/80'
              }
              {...testimony}
            />
          )
        })}
      </BarSlider>
    </article>
  )
}
