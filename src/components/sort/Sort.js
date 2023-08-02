import React, { useState } from 'react'
import { useGlassesContext } from '@/app/contexts/productsContext'

const CaretUpIcon = (
  <svg className='w-4 h-4 ml-1 inline-block' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
    <path
      fillRule='evenodd'
      d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
      clipRule='evenodd'
    />
  </svg>
)

const CaretDownIcon = (
  <svg className='w-4 h-4 ml-1 inline-block' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
    <path
      fillRule='evenodd'
      d='M13.707 10.293a1 1 0 010 1.414L10 14.414l-3.707-3.707a1 1 0 111.414-1.414L10 11.586l2.293-2.293a1 1 0 111.414 1.414z'
      clipRule='evenodd'
    />
  </svg>
)

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [sortOption, setSortOption] = useState('price_desc')
  const { handleSort } = useGlassesContext()

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleSortOptionClick = (option) => {
    console.log(option)

    handleSort(option)
    if (option !== sortOption) {
      setSortOption(option)
    } else {
      setSortOption(option === 'price_desc' ? 'price_asc' : 'price_desc')
    }
    setIsOpen(false)
  }

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        className={`bg-white border border-slate-400 hover:bg-slate-400 hover:text-white active:bg-white active:border-slate-800 text-slate-800 font-semibold py-2 px-4 m-2 rounded inline-flex items-center`}
      >
        Sort
        {sortOption === 'price_desc' ? CaretDownIcon : CaretUpIcon}
      </button>
      {isOpen && (
        <div className='absolute  w-56 bg-white rounded-lg shadow-lg border border-gray-200'>
          <button
            className={`block w-full px-4 py-2 text-gray-800 hover:bg-blue-300 hover:text-white transition`}
            onClick={() => handleSortOptionClick('price_asc')}
          >
            Price (Low to High) {sortOption === 'price_asc' && CaretUpIcon}
          </button>
          <button
            className={`block w-full px-4 py-2 text-gray-800 hover:bg-slate-400 hover:text-white transition`}
            onClick={() => handleSortOptionClick('price_desc')}
          >
            Price (High to Low) {sortOption === 'price_desc' && CaretDownIcon}
          </button>
          <button
            className='block w-full px-4 py-2 text-gray-800 hover:bg-slate-400 hover:text-white'
            onClick={() => handleSortOptionClick('name_asc')}
          >
            Name (A to Z) {CaretUpIcon}
          </button>
          <button
            className='block w-full px-4 py-2 text-gray-800 hover:bg-slate-400 hover:text-white'
            onClick={() => handleSortOptionClick('name_desc')}
          >
            Name (Z to A) {CaretDownIcon}
          </button>
        </div>
      )}
    </div>
  )
}

export default SortDropdown
