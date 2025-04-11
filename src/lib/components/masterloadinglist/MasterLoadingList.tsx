import LoadingMasterCard from '@/lib/components/loadingmastercard/LoadingMasterCard'
import BarSlider from '@/lib/components/sliders/BarSlider'

export default function MasterLoadingList() {
  return (
    <BarSlider color="blue" className="w-full">
      {['list-1', 'list-2'].map((key) => {
        return (
          <ul key={key} className="flex justify-center gap-16 w-full duration-700 ease-in-out">
            {[1, 2, 3, 4].map((key) => {
              return <LoadingMasterCard key={key} />
            })}
          </ul>
        )
      })}
    </BarSlider>
  )
}
