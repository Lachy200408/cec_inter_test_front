'use client'

import type { CourseNavigationSection } from '@/lib/types/course-navigation-section.type'
import type { CourseType } from '@/lib/types/courses-type'
import { COURSE_NAVIGATION_SECTION_INITIAL_STATE } from '@/lib/constants/course-navigation-section-init-st'
import CourseCard from '@/lib/components/coursecard/CourseCard'
import BubbleSlider from '@/lib/components/sliders/BubbleSlider'
import CourseNavigation from '@/lib/components/coursenavigation/CourseNavigation'
import CourseLoadingList from '@/lib/components/courseloadinglist/CourseLoadingList'
import ErrorFeedback from '@/lib/components/errorfeedback/ErrorFeedback'
import { montserratFont } from '@/lib/fonts/montserrat'
import { cn } from '@/lib/utils/cn'
import { splitArray } from '@/lib/utils/splitArray'
import { useApi } from '@/lib/hooks/useApi'
import { useItemsQuantity } from '@/lib/hooks/useItemsQuantity'
import { useState, useEffect } from 'react'

export default function CoursesFeed() {
  const [activeSection, setActiveSection] = useState<CourseNavigationSection>(
    COURSE_NAVIGATION_SECTION_INITIAL_STATE
  )
  const {
    data: courses,
    error,
    loading,
    refetch,
  } = useApi<Array<CourseType>>(`/courses/category/${activeSection.section}?q=12`)
  const itemsQuantity = useItemsQuantity()
  const courseList = splitArray(courses ?? [], itemsQuantity)

  useEffect(() => {
    refetch(`/courses/category/${activeSection.section}?q=12`)
  }, [activeSection])

  return (
    <article
      className={cn(
        'relative w-full h-[548px] grid justify-items-center gap-[32px] pt-[48px] mb-4',
        montserratFont.className
      )}
    >
      <div className="absolute top-0 w-[2048px] h-[348px] bg-app-blue-500" />
      <CourseNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {loading && (
        <CourseLoadingList className="w-[min(1280px,80vw)] h-[368px] relative bottom-0 z-10" />
      )}
      {courses && courses.length > 0 && (
        <BubbleSlider className="w-[min(1280px,100%)] h-[368px] absolute bottom-[4px] z-10">
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
