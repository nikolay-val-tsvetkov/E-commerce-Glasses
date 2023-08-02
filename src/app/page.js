'use client'
import Header from '@/components/header/Header'
import ProductsGrid from '@/components/productsGrid/ProductsGrid'
import Filters from '@/components/filters/Filters'
import GlassesContextProvider from './contexts/productsContext'
import Sort from '../components/sort/Sort.js'
import LoadMoreButton from '@/components/loadMoreButton/LoadMoreButton'

export default function Home() {
  return (
    <GlassesContextProvider>
      <div className='grid grid-rows-12 grid-cols-7 mx-4 my-2 px-8 relative'>
        <div className='row-span-1 sticky top-0 col-span-7 border border-3 border-slate-400 z-10'>
          <Header />
        </div>
        <div className='row-span-4 col-span-2 border border-3 border-slate-400'>
          <Filters />
        </div>
        <div className='row-span-1 col-span-3 border border-3 border-slate-400'>Category</div>
        <div className='row-span-1 col-span-2 z-20'>
          <Sort />
        </div>
        <div className='row-span-3 col-span-5  border border-3 border-slate-400'>
          <ProductsGrid />
        </div>
        <div className='flex justify-center row-span-1 col-span-7  border border-3 border-slate-400 '>
          <LoadMoreButton />
        </div>
        <div className=' flex justify-center row-span-1 col-span-7 border border-3 border-slate-400'>glasses.usa2019</div>
      </div>
    </GlassesContextProvider>
  )
}
