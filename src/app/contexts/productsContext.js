import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import _ from 'lodash'
import glasses from 'public/data/glasses.json'

const GlassesContext = createContext()

export const useGlassesContext = () => {
  return useContext(GlassesContext)
}

const initialStatteFilterTags = [
  {
    name: 'brand',
    options: [
      'all',
      'SunshineStyle',
      'VisionPro',
      'SunShade',
      'GoldenEyes',
      'PolarWrap',
      'RetroVision',
      'CatEyeChic',
      'GeometricSpecs',
      'ActiveWear',
      'ModaSpecs'
    ]
  },
  {
    name: 'shape',
    options: ['all', 'rectangular', 'round', 'square', 'cat-eye', 'oval', 'aviator', 'wraparound']
  },
  {
    name: 'type',
    options: ['all', 'sunglasses', 'eyeglasses']
  },
  {
    name: 'material',
    options: ['all', 'wooden', 'plastic', 'acetate', 'metal', 'polycarbonate']
  },
  {
    name: 'frameColor',
    options: ['all', 'tortoise', 'gold', 'pink', 'silver', 'black', 'brown', 'tortoise', 'green']
  }
]

const GlassesContextProvider = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(4000)
  const [glassesData, setGlassesData] = useState([])
  const [filter, setFilter] = useState({
    brand: 'all',
    color: 'all',
    shape: 'all',
    material: 'all',
    frameColor: 'all'
  })
  const [filterTags, setFilterTags] = useState(initialStatteFilterTags)
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
      filteredData = filteredData.filter((item) => item.price >= Number(minPrice) && item.price <= Number(maxPrice))
      const generateFilterTags = () => {
        const availableOptions = {
          brand: new Set(),
          shape: new Set(),
          type: new Set(),
          material: new Set(),
          frameColor: new Set()
        }

        filteredData.forEach((item) => {
          availableOptions.brand.add(item.brand)
          availableOptions.shape.add(item.shape)
          availableOptions.type.add(item.type)
          availableOptions.material.add(item.material)
          availableOptions.frameColor.add(item.frameColor)
        })

        const filterTags = [
          {
            name: 'brand',
            options: ['All', ...Array.from(availableOptions.brand)]
          },
          {
            name: 'shape',
            options: ['All', ...Array.from(availableOptions.shape)]
          },
          {
            name: 'type',
            options: ['All', ...Array.from(availableOptions.type)]
          },
          {
            name: 'material',
            options: ['All', ...Array.from(availableOptions.material)]
          },
          {
            name: 'frameColor',
            options: ['All', ...Array.from(availableOptions.frameColor)]
          }
        ]

        return filterTags
      }

      setFilterTags(generateFilterTags())
      const initialData = filteredData.slice(0, 12)
      setGlassesData(initialData)
    }

    const debouncedApplyFilter = _.debounce(applyFilter, 300)
    debouncedApplyFilter()
  }, [filter, maxPrice, minPrice])

  const handleResetFilter = (filterName) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterName]: initialStatteFilterTags[filterName]
    }))
  }

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
        filterTags,
        setFilter,
        handleResetFilter,
        sort,
        setSort,
        loadMoreItems,
        minPrice,
        maxPrice,
        setMinPrice,
        setMaxPrice
      }}
    >
      {children}
    </GlassesContext.Provider>
  )
}

export default GlassesContextProvider
