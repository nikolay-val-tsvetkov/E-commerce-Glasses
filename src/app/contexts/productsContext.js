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
const initialGridItemsRendered = 12

const GlassesContextProvider = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(4000)
  const [glassesData, setGlassesData] = useState([])
  const [currentCategoryItemsCounter, setcurrentCategoryItemsCounter] = useState(0)
  const [currentCategory, setCurrentCategory] = useState('')

  const [filter, setFilter] = useState({
    brand: 'all',
    color: 'all',
    shape: 'all',
    material: 'all',
    frameColor: 'all'
  })
  const [filterTags, setFilterTags] = useState(initialStatteFilterTags)
  const [sort, setSort] = useState('default')
  const [hasMoreItems, setHasMoreItems] = useState(true)

  useEffect(() => {
    const initialData = glasses.glasses.slice(0, initialGridItemsRendered)
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
            options: ['all', ...Array.from(availableOptions.brand)]
          },
          {
            name: 'shape',
            options: ['all', ...Array.from(availableOptions.shape)]
          },
          {
            name: 'type',
            options: ['all', ...Array.from(availableOptions.type)]
          },
          {
            name: 'material',
            options: ['all', ...Array.from(availableOptions.material)]
          },
          {
            name: 'frameColor',
            options: ['all', ...Array.from(availableOptions.frameColor)]
          }
        ]

        return filterTags
      }

      setFilterTags(generateFilterTags())
      const initialData = filteredData.slice(0, initialGridItemsRendered)
      setGlassesData(initialData)
    }

    const debouncedApplyFilter = _.debounce(applyFilter, 300)
    debouncedApplyFilter()
  }, [filter, maxPrice, minPrice])

  const handleSort = (sortOption) => {
    const sortFunctions = {
      price_asc: (a, b) => a.price - b.price,
      price_desc: (a, b) => b.price - a.price,
      name_asc: (a, b) => a.name.localeCompare(b.name),
      name_desc: (a, b) => b.name.localeCompare(a.name)
    }

    const sortFunction = sortFunctions[sortOption]
    const sortedGlasses = sortFunction ? [...glassesData].sort(sortFunction) : [...glassesData]

    setGlassesData(sortedGlasses)
  }

  const handleResetFilter = (filterName) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterName]: initialStatteFilterTags[filterName]
    }))
  }

  const loadMoreItems = () => {
    const currentItemsCount = glassesData.length
    const startIndex = currentItemsCount
    const endIndex = startIndex + initialGridItemsRendered
    const newData = glasses.glasses.slice(startIndex, endIndex)

    if (newData.length < initialGridItemsRendered) {
      setHasMoreItems(false)
    }

    setGlassesData((prevData) => [...prevData, ...newData])
  }
  const handleNavOptions = (option) => {
    let filteredGlasses = []
    if (option === 'Sunglasses') {
      filteredGlasses = glassesData.filter((item) => {
        item.type === 'sunglasses'
      })
      setcurrentCategoryItemsCounter(filteredGlasses.length)
      setCurrentCategory(option)
      setGlassesData(filteredGlasses)
    } else if (option === 'Eyeglasses') {
      filteredGlasses = glassesData.filter((item) => {
        item.type === 'eyeglasses'
      })
      setcurrentCategoryItemsCounter(filteredGlasses.length)
      setCurrentCategory(option)
      setGlassesData(filteredGlasses)
    } else if (option === 'Promotions') {
      filteredGlasses = glassesData.filter((item) => {
        item.oldPrice !== 0
      })

      setGlassesData(filteredGlasses)
      setCurrentCategory(option)
      setcurrentCategoryItemsCounter(filteredGlasses.length)
    }
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
        setMaxPrice,
        handleSort,
        hasMoreItems,
        initialGridItemsRendered,
        handleNavOptions,
        currentCategoryItemsCounter,
        currentCategory
      }}
    >
      {children}
    </GlassesContext.Provider>
  )
}

export default GlassesContextProvider
