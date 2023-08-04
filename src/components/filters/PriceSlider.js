import React from 'react'
import { useGlassesContext } from '@/app/contexts/productsContext'
import { RangeSlider } from 'next-range-slider'

const PriceSlider = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useGlassesContext()

  return (
    <div>
      <div className='flex justify-between mx-4'>
        <div>{minPrice}</div>
        <div>{maxPrice}</div>
      </div>

      <RangeSlider
        min={10}
        max={3910}
        step={100}
        options={{
          leftInputProps: {
            value: minPrice,
            onChange: (e) => setMinPrice(Number(e.target.value))
          },
          rightInputProps: {
            value: maxPrice,
            onChange: (e) => setMaxPrice(Number(e.target.value))
          }
        }}
      />
    </div>
  )
}

export default PriceSlider
