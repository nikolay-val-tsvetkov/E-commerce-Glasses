import React from 'react'
import ShowCardItem from '../showCardItem/ShowCardItem'
import { useGlassesContext } from '@/app/contexts/productsContext'

const ProductsGrid = () => {
  const { glassesData } = useGlassesContext()

  return (
    <div className='grid gap-1 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {glassesData.map((item, index) => (
        <ShowCardItem key={'product-' + item.id + '-' + index} itemData={item} index={index} />
      ))}
    </div>
  )
}

export default ProductsGrid
