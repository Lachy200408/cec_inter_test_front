import LoadingTestimonyCard from '@/lib/components/loadingtestimonycard/LoadingTestimonyCard'
import BarSlider from '@/lib/components/sliders/BarSlider'

export default function TestimonyLoadingList() {
  return (
    <BarSlider color="yellow" className="w-full">
      {['list-1', 'list-2'].map((key) => {
        return (
          <ul key={key} className="flex justify-center gap-16 w-full duration-700 ease-in-out">
            {[1, 2, 3, 4].map((key) => {
              return <LoadingTestimonyCard key={key} />
            })}
          </ul>
        )
      })}
    </BarSlider>
  )
}
