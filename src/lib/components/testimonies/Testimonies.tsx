import RectDecorator from '@/lib/components/decorators/RectDecorator'
import BarSlider from '@/lib/components/sliders/BarSlider'
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
        <ul className="flex justify-around gap-8 w-full duration-700 ease-in-out bg-white">
          {testimonies.map((testimony, index) => {
            return (
              <TestimonyCard
                key={testimony.id + index + 34}
                className={
                  index % 2 === 0 ? 'bg-app-yellow-500/15' : 'bg-app-blue-500 **:text-white/80'
                }
                {...testimony}
              />
            )
          })}
        </ul>
        <ul className="flex justify-around gap-8 w-full duration-700 ease-in-out bg-white">
          {testimonies.map((testimony, index) => {
            return (
              <TestimonyCard
                key={testimony.id + index}
                className={
                  index % 2 !== 0 ? 'bg-app-yellow-500/15' : 'bg-app-blue-500 **:text-white/80'
                }
                {...testimony}
              />
            )
          })}
        </ul>
      </BarSlider>
    </article>
  )
}
