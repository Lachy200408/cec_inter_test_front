import LoadingCourseCard from '@/lib/components/loadingcoursecard/LoadingCourseCard'
import BubbleSlider from '@/lib/components/sliders/BubbleSlider'

interface Props {
  className?: string
}

export default function CourseLoadingList({ className }: Props) {
  return (
    <BubbleSlider color="blue" className={className}>
      {['list-1', 'list-2'].map((key) => (
        <ul key={key} className="flex justify-around gap-8 w-full duration-700 ease-in-out">
          {[key + 1, key + 2, key + 3, key + 4].map((key) => {
            return <LoadingCourseCard key={key} />
          })}
        </ul>
      ))}
    </BubbleSlider>
  )
}
