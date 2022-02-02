import { createContext, useState } from 'react'

const RoastContext = createContext({}, () => {})

export const RoastProvider = ({ children }) => {
  const [roastData, setRoastData] = useState({})

  const updateRoastData = (data) => {
    setRoastData(Object.assign(roastData, data))
  }

  const clearRoastData = () => {
    setRoastData({})
  }

  return (
    <RoastContext.Provider
      value={{ roastData, updateRoastData, clearRoastData }}
    >
      {children}
    </RoastContext.Provider>
  )
}

export default RoastContext
