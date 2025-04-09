import { LanguageIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/20/solid'
import { BeakerIcon, AcademicCapIcon, PaintBrushIcon, HeartIcon } from '@heroicons/react/16/solid'
import CourseCard from '@/lib/components/coursecard/CourseCard'
import BubbleSlider from '@/lib/components/sliders/BubbleSlider'
import RectDecorator from '@/lib/components/decorators/RectDecorator'
import CourseNavigationItem from '@/lib/components/coursenavigationitem/CourseNavigationItem'
import { courses } from '@/lib/mocks/courses'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function CoursesFeed() {
  return (
    <article
      className={cn(
        'relative w-full grid justify-items-center gap-8 pt-12 mb-4',
        montserratFont.className
      )}
    >
      <div className=" absolute top-0 w-svw h-[348px] bg-app-blue-500" />
      <nav className="relative z-10 bg-white rounded-xl py-4 px-8 w-320">
        <div className="flex items-center justify-center gap-12 w-full">
          <CourseNavigationItem className="w-1/6 min-w-44 justify-center uppercase">
            <BeakerIcon className="size-6" />
            Ciencias
          </CourseNavigationItem>
          <CourseNavigationItem className="w-1/6 min-w-44 justify-center uppercase">
            <AcademicCapIcon className="size-6" />
            Letras
          </CourseNavigationItem>
          <CourseNavigationItem className="w-1/6 min-w-44 justify-center uppercase">
            <PaintBrushIcon className="size-6" />
            Artes
          </CourseNavigationItem>
          <CourseNavigationItem className="w-1/6 min-w-44 justify-center uppercase">
            <BriefcaseIcon className="size-6 overflow-hidden" />
            Negocios
          </CourseNavigationItem>
          <CourseNavigationItem className="w-1/6 min-w-44 justify-center uppercase">
            <LanguageIcon className="size-6" />
            Idiomas
          </CourseNavigationItem>
          <CourseNavigationItem className="w-1/6 min-w-44 justify-center uppercase">
            <HeartIcon className="size-6" />
            Salud
          </CourseNavigationItem>
        </div>
        <div className="w-full h-1 mt-3 relative">
          <RectDecorator className="absolute top-0 left-0 h-1.5 w-16 bg-app-blue-500" />
        </div>
      </nav>
      <BubbleSlider color="blue" className="w-320">
        <ul className="flex justify-around gap-8 w-full duration-700 ease-in-out">
          {courses.map((course) => {
            return <CourseCard key={course.id} {...course} />
          })}
        </ul>
        <ul className="flex justify-around gap-8 w-full duration-700 ease-in-out">
          {courses.map((course) => {
            return <CourseCard key={course.id + 32} {...course} />
          })}
        </ul>
      </BubbleSlider>
    </article>
  )
}
