import Image from 'next/image'
import { useGlassesContext } from '@/app/contexts/productsContext'
import { cartIcon } from '../../../public/helpers/icons'

const menuLinks = [
  {
    title: 'Sunglasses',
    option: 'sunglasses'
  },
  {
    title: 'Eyeglasses',
    option: 'eyeglasses'
  },
  {
    title: 'Promotions',
    option: 'discount',
    filterBy: 'promotions'
  }
]
export default function Header() {
  const { handleNavOptions, cartItems } = useGlassesContext()

  return (
    <div className='flex flex-col items-center sm:flex-row text-xs md:text-sm bg-slate-50/90 justify-around'>
      <Image src='/logo.jpg' className='hidden md:block' alt='Glasses Logo' width='200' height='30' />
      <nav>
        <ul className='flex flex-col sm:flex-row'>
          {menuLinks.map(
            ({ title, option, filterBy }) =>
              title &&
              option && (
                <li key={title} className='p-2 sm:p-6 cursor-pointer' onClick={() => handleNavOptions(option, filterBy)}>
                  {title}
                </li>
              )
          )}
        </ul>
      </nav>
      <div className='sm:mt-4 mb-2 mr-4 align-middle text-black hover:text-gray-700 relative'>
        {cartIcon}
        <span className='absolute top-2 left-8 text-center bg-red-200 rounded-full h-4 w-4 md:h-6 md:w-6'>{cartItems.length}</span>
      </div>
    </div>
  )
}
