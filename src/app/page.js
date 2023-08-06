'use client'
import Header from '@/components/header/Header'
import ProductsGrid from '@/components/productsGrid/ProductsGrid'
import Filters from '@/components/filters/Filters'
import GlassesContextProvider from './contexts/productsContext'
import Sort from '../components/sort/Sort.js'
import LoadMoreButton from '@/components/loadMoreButton/LoadMoreButton'
import Category from '@/components/category/Category'
import 'next-range-slider/dist/main.css'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div>
      <GlassesContextProvider>
        <div className='w-full fixed top-0 col-span-7 z-20 h-2 bg-slate-50/90'>
          <Header />
        </div>
        <div className='grid grid-rows-7 grid-cols-7 mt-44 sm:mt-32 mx-16  px-8 relative w-fit-content bg-slate-50/50 rounded-lg'>
          <div className='row-span-3 col-span-7 sm:col-span-2 mt-4 '>
            <Filters />
          </div>
          <div className='row-span-1 col-span-7 sm:col-span-3 mt-4 ml-4'>
            <Category />
          </div>
          <div className='row-span-1 col-span-7 sm:col-span-2 mt-4 mr-16 justify-self-end z-10'>
            <Sort />
          </div>
          <div className='row-span-2 col-span-7 sm:col-span-5'>
            <ProductsGrid />
          </div>
          <div className='flex justify-center row-span-1 col-span-7'>
            <LoadMoreButton />
          </div>
          <div className='flex w-full justify-around row-span-1 col-span-7 bg-slate-50 py-4'>
            <Footer />
          </div>
        </div>
      </GlassesContextProvider>
    </div>
  )
}
