import GoogleSponsor from '@/lib/icons/Google'
import RectDecorator from '../decorators/RectDecorator'
import AmazonSponsor from '@/lib/icons/Amazon'
import FitbitSponsor from '@/lib/icons/Fitbit'
import PaypalSponsor from '@/lib/icons/Paypal'
import NetflixSponsor from '@/lib/icons/Netflix'
import AirbnbSponsor from '@/lib/icons/Airbnb'

export default function Companies() {
  return (
    <article className="max-w-7xl w-full grid justify-items-center gap-8">
      <h5 className="w-max text-center text-black relative">
        Nuestros estudiantes se graduan y trabajan con{' '}
        <RectDecorator className="bg-app-yellow-500 w-11 absolute top-full left-0" />
      </h5>
      <ul className="flex justify-center items-center gap-8">
        <li>
          <AirbnbSponsor className="h-10 w-auto" />
        </li>
        <li>
          <AmazonSponsor className="h-10 w-auto" />
        </li>
        <li>
          <FitbitSponsor className="h-10 w-auto" />
        </li>
        <li>
          <NetflixSponsor className="h-10 w-auto" />
        </li>
        <li>
          <GoogleSponsor className="h-10 w-auto" />
        </li>
        <li>
          <PaypalSponsor className="h-10 w-auto" />
        </li>
      </ul>
    </article>
  )
}
