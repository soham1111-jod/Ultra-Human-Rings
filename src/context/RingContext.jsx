import { createContext, useContext, useState } from 'react'

const RingContext = createContext()

export function RingProvider({ children }) {
  const [selectedRing, setSelectedRing] = useState({
    color: 'black',
    size: 'US 7',
    quantity: 1
  })

  const updateSelection = (key, value) => {
    setSelectedRing(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <RingContext.Provider value={{ selectedRing, updateSelection }}>
      {children}
    </RingContext.Provider>
  )
}

export const useRing = () => useContext(RingContext)