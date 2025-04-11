'use client'

import type { CourseNavigationSection } from '@/lib/types/course-navigation-section.type'
import { COURSE_CATEGORIES } from '@/lib/constants/course-categories.enum'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/20/solid'
import { BeakerIcon, AcademicCapIcon, PaintBrushIcon, HeartIcon } from '@heroicons/react/16/solid'
import RectDecorator from '@/lib/components/decorators/RectDecorator'
import CourseNavigationItem from '@/lib/components/coursenavigationitem/CourseNavigationItem'

interface Props {
  activeSection: CourseNavigationSection
  setActiveSection: (activeSection: CourseNavigationSection) => void
}

export default function CourseNavigation({ activeSection, setActiveSection }: Props) {
  const navigationItems = [
    {
      title: 'Ciencias',
      icon: <BeakerIcon className="size-6" />,
      section: COURSE_CATEGORIES.SCIENCES,
    },
    {
      title: 'Letras',
      icon: <AcademicCapIcon className="size-6" />,
      section: COURSE_CATEGORIES.LETTERS,
    },
    {
      title: 'Artes',
      icon: <PaintBrushIcon className="size-6" />,
      section: COURSE_CATEGORIES.ARTS,
    },
    {
      title: 'Negocios',
      icon: (
        <div className="w-6 aspect-square grid place-items-center relative">
          <BriefcaseIcon className="size-6 absolute -left-2" />
        </div>
      ),
      section: COURSE_CATEGORIES.BUSINESS,
    },
    {
      title: 'Idiomas',
      icon: <LanguageIcon className="size-6" />,
      section: COURSE_CATEGORIES.LANGUAGES,
    },
    {
      title: 'Salud',
      icon: <HeartIcon className="size-6" />,
      section: COURSE_CATEGORIES.HEALTH,
    },
  ]

  const itemsLength = navigationItems.length
  const currentIndex = activeSection.index
  const left = `${(100 / itemsLength) * currentIndex + (4 / itemsLength) * currentIndex}%`

  return (
    <nav className="relative z-10 bg-white rounded-xl py-4 px-8 h-max w-max">
      <div className="flex items-center 2xl:justify-center gap-12 max-lg:max-w-[70vw] max-w-[80vw] overflow-x-auto scroll-soft">
        {navigationItems.map((item, index) => {
          return (
            <CourseNavigationItem
              key={index}
              active={activeSection.index === index}
              onClick={() => setActiveSection({ index: index, section: item.section })}
            >
              {item.icon}
              {item.title}
            </CourseNavigationItem>
          )
        })}
      </div>
      <div className="w-full h-1 mt-3 relative max-2xl:hidden">
        <RectDecorator
          className="absolute top-0 h-1.5 w-16 bg-app-blue-500 transition-all duration-300"
          style={{ left: left }}
        />
      </div>
    </nav>
  )
}
