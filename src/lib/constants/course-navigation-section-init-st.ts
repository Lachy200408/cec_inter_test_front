import { CourseNavigationSection } from '@/lib/types/course-navigation-section.type'
import { COURSE_CATEGORIES } from '@/lib/constants/course-categories.enum'

export const COURSE_NAVIGATION_SECTION_INITIAL_STATE: CourseNavigationSection = {
  index: 0,
  section: COURSE_CATEGORIES.SCIENCES,
}
