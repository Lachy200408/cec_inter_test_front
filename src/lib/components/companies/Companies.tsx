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
      <h3 className="w-max text-center text-black font-medium relative">
        Nuestros estudiantes se graduan y trabajan con{' '}
        <RectDecorator className="bg-app-yellow-500 w-14 absolute top-full left-0" />
      </h3>
      <ul className="flex justify-center items-center gap-12">
        <li>
          <AirbnbSponsor className="h-14 w-auto" />
        </li>
        <li>
          <AmazonSponsor className="h-14 w-auto" />
        </li>
        <li>
          <FitbitSponsor className="h-14 w-auto" />
        </li>
        <li>
          <NetflixSponsor className="h-14 w-auto" />
        </li>
        <li>
          <GoogleSponsor className="h-14 w-auto" />
        </li>
        <li>
          <PaypalSponsor className="h-14 w-auto" />
        </li>
      </ul>
    </article>
  )
}
