import RectDecorator from '@/lib/components/decorators/RectDecorator'
import MasterCard from '@/lib/components/mastercard/MasterCard'
import BarSlider from '@/lib/components/barslider/BarSlider'
import { masters } from '@/lib/mocks/masters'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function MasterFeed() {
  return (
    <article
      className={cn(
        'relative max-w-320 w-full h-md bg-app-blue-500/15 rounded-xl grid justify-items-center gap-8 px-20 py-16 overflow-x-hidden',
        montserratFont.className
      )}
    >
      <h3>
        Nuestros profesores
        <RectDecorator className="bg-app-blue-500 mt-3 w-14" />
      </h3>
      <BarSlider color="blue">
        {masters.map((master) => {
          return <MasterCard key={master.id} {...master} />
        })}
      </BarSlider>
    </article>
  )
}
