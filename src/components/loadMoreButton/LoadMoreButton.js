import { useGlassesContext } from '@/app/contexts/productsContext'
import React from 'react'

export default function LoadMoreButton() {
  const { loadMoreItems, hasMoreItems } = useGlassesContext()

  return (
    <div className='m-4'>
      <button
        onClick={loadMoreItems}
        disabled={!hasMoreItems}
        className={`transition-all duration-200 ease-in-out ${
          hasMoreItems
            ? 'bg-red-200 hover:bg-red-400 text-white shadow-lg'
            : 'text-gray-600 cursor-not-allowed shadow-none pointer-events-none'
        } font-semibold py-2 px-4 rounded`}
      >
        {hasMoreItems ? 'Load More Glasses' : 'No more glasses'}
      </button>
    </div>
  )
}
