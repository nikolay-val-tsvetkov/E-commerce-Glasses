import React from 'react'
import ShowCardItem from '../showCardItem/ShowCardItem'
import { useGlassesContext } from '@/app/contexts/productsContext'

const ProductsGrid = () => {
  const { glassesData, addToCart } = useGlassesContext()

  return (
    <div className='grid gap-1 xl:gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {glassesData.map((item, index) => (
        <ShowCardItem key={'product-' + item.id + '-' + index} itemData={item} index={index} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default ProductsGrid
