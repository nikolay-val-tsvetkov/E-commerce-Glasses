'use client'
import Header from '@/components/header/Header'
import ProductsGrid from '@/components/productsGrid/ProductsGrid'
import Filters from '@/components/filters/Filters'
import GlassesContextProvider from './contexts/productsContext'

export default function Home() {
  return (
    <GlassesContextProvider>
      <div className='grid grid-rows-12 grid-cols-7'>
        <div className='row-span-1 sticky top-0 col-span-7 border border-3 border-slate-400 z-10'>
          <Header />
        </div>
        <div className='row-span-4 col-span-2 border border-3 border-slate-400'>
          <Filters />
        </div>
        <div className='row-span-1 col-span-3 border border-3 border-slate-400'>Category</div>
        <div className='row-span-1 col-span-2'>Sort</div>
        <div className='row-span-3 col-span-5  border border-3 border-slate-400'>
          <ProductsGrid />
        </div>
        <div className='row-span-1 col-span-7  border border-3 border-slate-400'>
          <button>Load More</button>
        </div>
        <div className='row-span-1 col-span-7 border border-3 border-slate-400'>Footer Footer</div>
      </div>
    </GlassesContextProvider>
  )
}
