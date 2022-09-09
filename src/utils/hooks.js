import { useState } from "react"

export function useBoolean(val = false) {
  const [isActive, setIsActive] = useState(val)
  
  return [
    isActive,
    {
      toggle: () => setIsActive(prev => !prev),
      on: () => setIsActive(true),
      off: () => setIsActive(false)
    }
  ]
}

export function useStepper(defaultVal) {
  const [val, setVal] = useState(defaultVal)

  return [val, {
    next: () => setVal(val => val + 1),
    prev: () => setVal(val => val - 1)
  }]
}
