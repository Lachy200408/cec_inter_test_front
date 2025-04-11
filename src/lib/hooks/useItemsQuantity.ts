import { useEffect, useState } from 'react'

export function useItemsQuantity() {
  const [itemsQuantity, setItemsQuantity] = useState(0)

  useEffect(() => {
    const getQuantity = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setItemsQuantity(1)
      } else if (window.matchMedia('(max-width: 1024px)').matches) {
        setItemsQuantity(2)
      } else if (window.matchMedia('(max-width: 1280px)').matches) {
        setItemsQuantity(3)
      } else {
        setItemsQuantity(4)
      }
    }

    getQuantity()

    window.addEventListener('resize', getQuantity)

    return () => {
      window.removeEventListener('resize', getQuantity)
    }
  }, [])

  return itemsQuantity
}
