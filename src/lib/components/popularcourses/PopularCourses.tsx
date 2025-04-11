'use client'

import type { CourseType } from '@/lib/types/courses-type'
import CourseCard from '@/lib/components/coursecard/CourseCard'
import BubbleSlider from '@/lib/components/sliders/BubbleSlider'
import RectDecorator from '@/lib/components/decorators/RectDecorator'
import CourseLoadingList from '@/lib/components/courseloadinglist/CourseLoadingList'
import ErrorFeedback from '@/lib/components/errorfeedback/ErrorFeedback'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'
import { splitArray } from '@/lib/utils/splitArray'
import { useApi } from '@/lib/hooks/useApi'

export default function PopularCourses() {
  const { data: courses, error, loading } = useApi<Array<CourseType>>('/courses/popular?q=12')
  const courseList = splitArray(courses ?? [], 4)

  return (
    <article
      className={cn(
        'relative w-full h-[548px] grid justify-items-center gap-[32px] pt-[48px] mb-4',
        montserratFont.className
      )}
    >
      <div className="absolute top-0 w-svw h-[348px] bg-app-yellow-500" />
      <h2 className="relative z-10 text-center pt-8">
        Programas más populares
        <RectDecorator className="bg-app-blue-500 mt-3 w-14" />
      </h2>
      {loading && <CourseLoadingList className="w-320 h-[368px] relative bottom-0 z-10" />}
      {courses && courses.length > 0 && (
        <BubbleSlider className="w-320 h-[368px] absolute bottom-[4px] z-10">
          {courseList.map((list, index) => {
            return (
              <ul
                key={index}
                className="flex justify-center gap-12 w-full duration-700 ease-in-out"
              >
                {list.map((course, index) => {
                  return <CourseCard key={index} {...course} />
                })}
              </ul>
            )
          })}
        </BubbleSlider>
      )}
      {(error || (courses && courses.length === 0)) && (
        <ErrorFeedback
          error="No se ha podido cargar los cursos"
          feedback="Recargue la página para verlos"
        />
      )}
    </article>
  )
}
