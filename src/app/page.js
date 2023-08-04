'use client'
import Header from '@/components/header/Header'
import ProductsGrid from '@/components/productsGrid/ProductsGrid'
import Filters from '@/components/filters/Filters'
import GlassesContextProvider from './contexts/productsContext'
import Sort from '../components/sort/Sort.js'
import LoadMoreButton from '@/components/loadMoreButton/LoadMoreButton'
import Category from '@/components/category/Category'
import 'next-range-slider/dist/main.css'

export default function Home() {
  return (
    <GlassesContextProvider>
      <div className='grid grid-rows-12 grid-cols-7 mx-8 my-2 px-8 relative w-fit-content'>
        <div className='row-span-1 sticky top-0 col-span-6 sm:col-span-7 z-10'>
          <Header />
        </div>
        <div className='row-span-4 col-span-2 mt-4'>
          <Filters />
        </div>
        <div className='row-span-1 col-span-3 mt-4'>
          <Category />
        </div>
        <div className='row-span-1 col-span-2 mt-4 justify-self-end'>
          <Sort />
        </div>
        <div className='row-span-3 col-span-5'>
          <ProductsGrid />
        </div>
        <div className='flex justify-center row-span-1 col-span-7'>
          <LoadMoreButton />
        </div>
        <div className=' flex justify-center row-span-1 col-span-7'>glasses.usa2019</div>
      </div>
    </GlassesContextProvider>
  )
}
