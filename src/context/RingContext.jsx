import { createContext, useContext, useState } from 'react'
import { ringOptions } from '../constants/ringOptions'

const RingContext = createContext()

export function RingProvider({ children }) {
  const [selectedRing, setSelectedRing] = useState({
    color: 'titanium',
    size: 'US 7',
    quantity: 1
  })

  const updateSelection = (key, value) => {
    setSelectedRing(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleCheckout = () => {
    const selectedColor = ringOptions.colors.find(color => color.id === selectedRing.color)
    
    console.log('Checkout Details:', {
      color: selectedColor?.name || selectedRing.color,
      size: selectedRing.size,
      quantity: selectedRing.quantity,
      price: selectedColor?.price || '₹28,499',
      totalPrice: `₹${(parseInt(selectedColor?.price.replace(/[^\d]/g, '')) * selectedRing.quantity).toLocaleString()}`
    })
  }

  return (
    <RingContext.Provider value={{ selectedRing, updateSelection, handleCheckout }}>
      {children}
    </RingContext.Provider>
  )
}

export const useRing = () => useContext(RingContext)