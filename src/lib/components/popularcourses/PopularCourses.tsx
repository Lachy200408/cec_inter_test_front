import CourseCard from '@/lib/components/coursecard/CourseCard'
import BubbleSlider from '@/lib/components/sliders/BubbleSlider'
import RectDecorator from '@/lib/components/decorators/RectDecorator'
import { courses } from '@/lib/mocks/courses'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'

export default function PopularCourses() {
  return (
    <article
      className={cn(
        'relative w-full grid justify-items-center gap-8 pt-20 mb-4',
        montserratFont.className
      )}
    >
      <div className="absolute top-0 w-svw h-[348px] bg-app-yellow-500" />
      <div className="relative z-10 max-w-320 w-full grid justify-items-center gap-16">
        <h2>
          Programas más populares
          <RectDecorator className="bg-app-blue-500 mt-3 w-14" />
        </h2>
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
      </div>
    </article>
  )
}
