'use client'

import SliderButton from '@/lib/components/sliderbutton/SliderButton'
import { Carousel, ThemeProvider, createTheme } from 'flowbite-react'
import { cn } from '@/lib/utils/cn'

interface Props {
  color?: 'blue' | 'yellow'
  className?: string
  children: Array<React.ReactNode> | React.ReactNode
}

export default function BubbleSlider({ children, className, color = 'blue' }: Props) {
  const bgColorClass = color === 'blue' ? 'bg-app-blue-500' : 'bg-app-yellow-500'
  const borderColorClass = color === 'blue' ? 'border-app-blue-500' : 'border-app-yellow-500'
  const theme = createTheme({
    carousel: {
      item: {
        wrapper: {
          off: 'w-full h-[336px] shrink-0 transform cursor-default snap-center',
          on: 'w-full h-[336px] shrink-0 transform cursor-default snap-center',
        },
      },
      indicators: {
        active: {
          on: bgColorClass,
          off: '[background:transparent_!important]',
        },
        base: `border ${borderColorClass} size-4 rounded-full cursor-pointer`,
        wrapper:
          'flex justify-center gap-2 w-full absolute -bottom-4 left-1/2 -translate-x-1/2 z-10',
      },
      scrollContainer: {
        base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll gap-12 scroll-smooth rounded-lg [scrollbar-width:thin] [scrollbar-color:transparent_transparent]',
        snap: 'snap-x',
      },
    },
  })

  return (
    <>
      <div className={cn('grid justify-items-center', className)}>
        <ThemeProvider theme={theme}>
          <Carousel
            leftControl={<SliderButton className="absolute top-1/4 -left-12 rotate-180" />}
            rightControl={<SliderButton className="absolute top-1/4 -right-12" />}
            slide={false}
            className="h-[368px]"
          >
            {children}
          </Carousel>
        </ThemeProvider>
      </div>
    </>
  )
}
