import Image from 'next/image'

export default function ShowCardItem({ itemData, index }) {
  const { name, type, shape, description, price, brand, material, frameColor } = itemData
  const tagStyles = 'inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 my-2'

  return (
    <div
      className={`flex flex-col flex-auto w-1/3  border border-bottom border-purple-200 rounded-lg relative m-4 p-2 ${
        index % 2 === 0 ? 'bg-green-300' : 'bg-red-300'
      }`}
    >
      <div className='flex mb-2'>
        <div className='w-1/3 h-1/3 rounded-full  p-1'>
          <Image src='/Glasses_black.jpg' alt={name} width={200} height={200} className='rounded-full' />
        </div>
        <h5 className='ml-2 text-sm md:text-xl font-bold text-white'>{name}</h5>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6 ml-2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
          />
        </svg>
      </div>

      <p className='mb-3 text-sm lg:text-lg text-gray-700 dark:text-gray-600'>{description}</p>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-4'>
        <div className='md:flex md:items-center'>
          <span className='text-xs md:text-sm text-gray-800'>{brand}</span>
          <span className='text-gray-500 text-xs ml-2'>{material}</span>
        </div>
        <span className='text-gray-700 font-bold text-xs md:text-sm'>${price.toFixed(2)}</span>
      </div>
      <div className='mt-4 flex flex-col'>
        <div className={tagStyles}>{type}</div>
        <div className={tagStyles}>{shape}</div>
        <div className={tagStyles}>
          <span>Frame: {frameColor}</span>
          <div className='h-3 w-3 rounded-full inline-block ml-4 pt-2' style={{ background: frameColor }}></div>
        </div>
      </div>
    </div>
  )
}
