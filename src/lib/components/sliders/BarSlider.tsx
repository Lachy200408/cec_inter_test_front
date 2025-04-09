'use client'

import NavigationBar from '@/lib/components/navigationbar/NavigationBar'
import SliderButton from '@/lib/components/sliderbutton/SliderButton'
import { Carousel, ThemeProvider, createTheme } from 'flowbite-react'

interface Props {
  color?: 'blue' | 'yellow'
  children: Array<React.ReactNode>
}

export default function BarSlider({ children, color = 'blue' }: Props) {
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
      <div className="relative w-full grid place-items-center">
        <ThemeProvider theme={theme}>
          <Carousel
            leftControl={
              <SliderButton className="absolute top-1/2 -left-12 -translate-y-1/2 rotate-180" />
            }
            rightControl={<SliderButton className="absolute top-1/2 -right-12 -translate-y-1/2" />}
            indicators={false}
            slide={false}
            className="min-h-72"
          >
            {children}
          </Carousel>
        </ThemeProvider>
      </div>

      <NavigationBar color={color} />
    </>
  )
}
