import RectDecorator from '@/lib/components/decorators/RectDecorator'
import MasterCard from '@/lib/components/mastercard/MasterCard'
import BarSlider from '@/lib/components/sliders/BarSlider'
import { masters } from '@/lib/mocks/masters'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function MasterFeed() {
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
      <BarSlider color="blue">
        <ul className="flex justify-around gap-8 w-full duration-700 ease-in-out">
          {masters.map((master) => {
            return <MasterCard key={master.id} {...master} />
          })}
        </ul>
        <ul className="flex justify-around gap-8 w-full duration-700 ease-in-out">
          {masters.map((master) => {
            return <MasterCard key={master.id} {...master} />
          })}
        </ul>
      </BarSlider>
    </article>
  )
}
