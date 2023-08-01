import React from 'react'
import { useGlassesContext } from '@/app/contexts/productsContext'

const PriceSlider = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useGlassesContext()

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value)
  }

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value)
  }

  return (
    <div className='flex items-center'>
      <div className='w-1/2'>
        <label htmlFor='minPrice' className='block text-sm font-medium text-gray-700'>
          Min Price {minPrice}
        </label>
        <input
          type='range'
          id='minPrice'
          name='minPrice'
          min='0'
          max='1499'
          value={minPrice}
          onChange={handleMinPriceChange}
          className='w-full h-2 bg-gray-300 rounded-full appearance-none'
        />
      </div>
      <div className='w-1/2'>
        <label htmlFor='maxPrice' className='block text-sm font-medium text-gray-700'>
          Max Price {maxPrice}
        </label>
        <input
          type='range'
          id='maxPrice'
          name='maxPrice'
          min='1500'
          max='3999'
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className='w-full h-2 bg-gray-300 rounded-full appearance-none'
        />
      </div>
    </div>
  )
}

export default PriceSlider
