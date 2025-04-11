'use client'

import NavigationBar from '@/lib/components/navigationbar/NavigationBar'
import SliderButton from '@/lib/components/sliderbutton/SliderButton'
import { Carousel, ThemeProvider, createTheme } from 'flowbite-react'
import { cn } from '@/lib/utils/cn'
import { useState } from 'react'

interface Props {
  color?: 'blue' | 'yellow'
  className?: string
  children: Array<React.ReactNode>
}

export default function BarSlider({ children, color = 'blue', className }: Props) {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = children.length
  const theme = createTheme({
    carousel: {
      item: {
        wrapper: {
          off: 'w-full shrink-0 transform cursor-default snap-center',
          on: 'w-full shrink-0 transform cursor-default snap-center',
        },
      },
      scrollContainer: {
        base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg [scrollbar-width:thin] [scrollbar-color:transparent_transparent]',
        snap: 'snap-x',
      },
    },
  })

  return (
    <>
      <div className={cn('grid place-items-center', className)}>
        <ThemeProvider theme={theme}>
          <Carousel
            leftControl={
              <SliderButton className="absolute top-1/2 -left-12 -translate-y-1/2 rotate-180" />
            }
            rightControl={<SliderButton className="absolute top-1/2 -right-12 -translate-y-1/2" />}
            indicators={false}
            slide={false}
            onSlideChange={(page) => setCurrentPage(page)}
            className="min-h-72"
          >
            {children}
          </Carousel>
        </ThemeProvider>
      </div>

      <NavigationBar color={color} currentPage={currentPage} pages={pages} />
    </>
  )
}
