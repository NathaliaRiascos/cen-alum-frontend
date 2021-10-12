import { useState } from "react"

export const useCounter = (initialState = 0, size) => {
  const [value, setValue] = useState(initialState)

  const handleDis = () => {
    if (value-1 >= 0) setValue(value - 1)
  }

  const handleAdd = () => {
    if (value + 1 <= size) setValue(value + 1)
  }

  return {
    value,
    handleDis,
    handleAdd,
  }
}
