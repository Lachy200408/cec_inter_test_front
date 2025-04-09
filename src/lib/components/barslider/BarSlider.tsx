'use client'

import NavigationBar from '@/lib/components/navigationbar/NavigationBar'
import SliderButton from '@/lib/components/sliderbutton/SliderButton'
import { cn } from '@/lib/utils/cn'

interface Props {
  color?: 'blue' | 'yellow'
  className?: string
  children: Array<React.ReactNode>
}

export default function BarSlider({ children, className, color = 'blue' }: Props) {
  return (
    <>
      <div className="relative w-full">
        <ul className={cn('w-full overflow-x-hidden flex justify-between', className)}>
          {children.map((child, index) => {
            return <li key={index}>{child}</li>
          })}
        </ul>
        <SliderButton onClick={() => {}} className="absolute top-1/2 -right-16 -translate-y-1/2" />
      </div>

      <NavigationBar color={color} />
    </>
  )
}
