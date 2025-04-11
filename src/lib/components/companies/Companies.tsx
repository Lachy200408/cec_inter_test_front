import RectDecorator from '@/lib/components/decorators/RectDecorator'
import GoogleSponsor from '@/lib/icons/Google'
import AmazonSponsor from '@/lib/icons/Amazon'
import FitbitSponsor from '@/lib/icons/Fitbit'
import PaypalSponsor from '@/lib/icons/Paypal'
import NetflixSponsor from '@/lib/icons/Netflix'
import AirbnbSponsor from '@/lib/icons/Airbnb'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function Companies() {
  return (
    <article
      className={cn('max-w-320 w-full grid justify-items-center gap-16', montserratFont.className)}
    >
      <h3 className="max-sm:max-w-[80vw] w-max text-wrap text-center text-black font-medium relative">
        Nuestros estudiantes se graduan y trabajan con{' '}
        <RectDecorator className="bg-app-yellow-500 w-14 absolute top-full left-0 max-sm:hidden" />
      </h3>
      <ul className="flex lg:justify-center items-center gap-12 w-full max-w-full overflow-x-auto scroll-soft">
        <li>
          <AirbnbSponsor className="h-8 xl:h-12 w-auto" />
        </li>
        <li>
          <AmazonSponsor className="h-8 xl:h-12 w-auto" />
        </li>
        <li>
          <FitbitSponsor className="h-8 xl:h-12 w-auto" />
        </li>
        <li>
          <NetflixSponsor className="h-8 xl:h-12 w-auto" />
        </li>
        <li>
          <GoogleSponsor className="h-8 xl:h-12 w-auto" />
        </li>
        <li>
          <PaypalSponsor className="h-8 xl:h-12 w-auto" />
        </li>
      </ul>
    </article>
  )
}
