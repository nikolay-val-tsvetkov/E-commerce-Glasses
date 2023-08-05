import Image from 'next/image'
import ShowDiscountPrice from '../category/ShowDiscountPrice'
import { cartIcon } from '../../../public/helpers/icons'

export default function ShowCardItem({ itemData, index, addToCart }) {
  const { name, type, shape, description, price, brand, material, frameColor, imageSrc, discount } = itemData
  const tagStyles = 'inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 my-2'

  const handleAddToCart = (event) => addToCart(event.target.value)

  return (
    <div
      className={`flex flex-col flex-auto w-11/12 shadow-lg border border-bottom border-purple-200 rounded-lg relative m-2 md:m-4 p-2 ${
        index % 2 === 0 ? 'bg-indigo-300 shadow-indigo-600' : 'bg-red-300 shadow-red-600'
      }`}
    >
      <div className='flex  items-center justify-center my-4 transform transition duration-500 hover:scale-150'>
        <div className='w-40 h-40 rounded-full p-1 flex items-center justify-center'>
          <Image src={imageSrc} alt={name} width={240} height={240} className='rounded p-6' />
        </div>
      </div>

      <h5 className='text-center text-sm md:text-xl font-bold text-white border-t-2'>{name}</h5>

      {/* {heartIcon} */}

      <p className='mb-3 text-sm xl:text-lg text-gray-700 dark:text-gray-600'>{description}</p>

      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mt-4'>
        <div className='md:flex md:items-center self-center'>
          <span className='text-xs md:text-sm text-gray-800'>{brand}</span>
          <span className='text-gray-500 text-xs ml-2'>{material}</span>
        </div>
        <ShowDiscountPrice price={price} discount={discount} />
      </div>

      <div className='mt-4 flex flex-col'>
        <div className={tagStyles}>{type}</div>
        <div className={tagStyles}>{shape}</div>
        <div className={tagStyles}>
          <span>Frame: {frameColor}</span>
          <div className='h-3 w-3 rounded-full inline-block ml-4 pt-2' style={{ background: frameColor }}></div>
        </div>
      </div>
      <div className='flex justify-center mt-4 text-white'>
        <button
          onClick={handleAddToCart}
          className='bg-orange-100 hover:bg-orange-200 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center'
        >
          {cartIcon}
        </button>
      </div>
    </div>
  )
}
