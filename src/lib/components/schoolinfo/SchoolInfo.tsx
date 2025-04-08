import Image from 'next/image'
import RectDecorator from '@/lib/components/decorators/RectDecorator'
import SchoolInfoItem from '@/lib/components/schoolinfoitem/SchoolInfoItem'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function SchoolInfo() {
  return (
    <article
      className={cn(
        'max-w-320 w-full h-180 bg-app-yellow-500/15 rounded-xl grid grid-cols-4 grid-rows-3 gap-8 px-12 py-20',
        montserratFont.className
      )}
    >
      <div className="col-span-2 row-span-2 grid grid-cols-2 grid-rows-[repeat(2,auto)]">
        <div className="col-span-2 flex flex-col gap-8">
          <h3 className="max-w-lg">
            ¿Qué puedes esperar al estudiar en un programa de CEC?
            <RectDecorator className="mt-3 w-16 bg-app-yellow-500" />
          </h3>
          <h5 className="text-app-gray font-light">
            Estudiar en un programa de CEC es una experiencia transformadora! Aquí obtendrás:
          </h5>
        </div>
        <div className="col-span-2 grid grid-cols-2 grid-rows-[repeat(2,auto)] grid-flow-col gap-x-8">
          <SchoolInfoItem head="Educación de calidad">
            Los programas de CEC están diseñados por expertos en la materia, asegurando que recibas
            una formación de alta calidad y actualizada.
          </SchoolInfoItem>
          <SchoolInfoItem head="Desarrollo Profesional">
            No solo adquirirás conocimientos teóricos, sino también habilidades prácticas que te
            prepararán para el mundo laboral.
          </SchoolInfoItem>
        </div>
      </div>
      <figure className="col-span-2 row-span-2 grid place-items-end relative">
        <Image
          src={'/chico-1.webp'}
          alt="Estudia con nosotros"
          width={1060}
          height={807}
          className="w-xl absolute bottom-6 right-8 z-10"
        />
        <div className="w-124 h-92 bg-app-blue-500 rounded-xl absolute bottom-6 right-8 z-5" />
        <div className="w-124 h-92 bg-app-yellow-500 rounded-xl" />
      </figure>
      <div className="col-span-4 grid grid-cols-4 grid-rows-[repeat(2,auto)] grid-flow-col gap-x-8">
        <SchoolInfoItem head="Flexibilidad">
          Los programas de CEC ofrecen modalidades de estudio flexibles, incluyendo opciones en
          línea y presenciales, para que puedas adaptar tu educación a tu estilo de vida.
        </SchoolInfoItem>
        <SchoolInfoItem head="Red de Contactos">
          Tendrás la oportunidad de conectar con profesionales y compañeros de diversas áreas,
          ampliando tu red de contactos y abriendo puertas a futuras oportunidades laborales.
        </SchoolInfoItem>
        <SchoolInfoItem head="Apoyo Integral">
          Desde el primer día, contarás con el apoyo de tutores y asesores que te guiarán en tu
          camino académico y profesional.
        </SchoolInfoItem>
        <SchoolInfoItem head="Certificación Reconocida">
          Al finalizar tu programa, obtendrás una certificación reconocida que potenciará tu
          currículum y te hará destacar en el mercado laboral.
        </SchoolInfoItem>
      </div>
    </article>
  )
}
