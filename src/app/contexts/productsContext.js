import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import glasses from 'public/data/glasses.json'

const GlassesContext = createContext()

export const useGlassesContext = () => {
  return useContext(GlassesContext)
}

const GlassesContextProvider = ({ children }) => {
  const [glassesData, setGlassesData] = useState([])
  const [filter, setFilter] = useState({
    brand: 'all',
    color: 'all',
    price: 'all',
    shape: 'all',
    material: 'all',
    frameColor: 'all'
  })
  const [sort, setSort] = useState('default')

  useEffect(() => {
    const initialData = glasses.glasses.slice(0, 12)
    setGlassesData(initialData)
  }, [])

  useEffect(() => {
    const applyFilter = () => {
      let filteredData = glasses.glasses

      for (const filterCategory in filter) {
        if (filter[filterCategory] !== 'all') {
          filteredData = filteredData.filter((item) => item[filterCategory] === filter[filterCategory])
        }
      }

      const initialData = filteredData.slice(0, 12)
      setGlassesData(initialData)
    }

    applyFilter()
  }, [filter])

  const loadMoreItems = () => {
    const currentLength = glassesData.length
    const newData = glasses.slice(currentLength, currentLength + 12)
    if (newData.length === 0) {
      console.log('No more items to load.')
      return
    }
    setGlassesData((prevData) => [...prevData, ...newData])
  }

  return (
    <GlassesContext.Provider
      value={{
        glassesData,
        setGlassesData,
        filter,
        setFilter,
        sort,
        setSort,
        loadMoreItems
      }}
    >
      {children}
    </GlassesContext.Provider>
  )
}

export default GlassesContextProvider
