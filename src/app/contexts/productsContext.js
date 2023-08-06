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

const descriptions = {
  sunglasses: {
    title: 'Our Sunglasses Fashionable Shades',
    description:
      'The Sunglasses on our e-commerce site are stylish and protective, designed to shield the eyes from harmful UV rays and glare, offering customers a wide selection of fashionable frames and lens options for various outdoor activities and fashion preferences.'
  },
  eyeglasses: {
    title: 'Our Trendy Frames',
    description:
      'The Eyeglasses on an e-commerce site are vision-correcting optical devices that enhance visual acuity for individuals with refractive errors like nearsightedness, farsightedness, and astigmatism. Customers can find a diverse range of stylish frames and prescription options, tailored to their unique needs and personal style preferences.'
  },
  discount: {
    title: 'Our Fantastic Promotions',
    description: 'Our promotions go from 10 to 50 %'
  }
}

const GlassesContextProvider = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(4000)
  const [glassesData, setGlassesData] = useState([])
  const [currentCategory, setCurrentCategory] = useState(descriptions.sunglasses)
  const [cartItems, setCartItems] = useState([])

  const [filter, setFilter] = useState({
    brand: 'all',
    color: 'all',
    shape: 'all',
    material: 'all',
    frameColor: 'all',
    type: 'sunglasses'
  })
  const [filterTags, setFilterTags] = useState(initialStatteFilterTags)
  const [sort, setSort] = useState('default')
  const [hasMoreItems, setHasMoreItems] = useState(true)

  const addToCart = (item) => setCartItems((prevCartItems) => [...prevCartItems, item])

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

  const handleNavOptions = (option, filterBy) => {
    setCurrentCategory(() => descriptions[option])
    if (filterBy === 'promotions') {
      const filteredGlasses = glasses.glasses.filter((item) => item?.discount && item)
      return setGlassesData(() => filteredGlasses)
    }

    setFilter((prevFilter) => ({
      ...prevFilter,
      type: option
    }))
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
        currentCategory,
        cartItems,
        addToCart
      }}
    >
      {children}
    </GlassesContext.Provider>
  )
}

export default GlassesContextProvider
