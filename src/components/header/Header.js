import Image from 'next/image'
import Link from 'next/link'
import { useGlassesContext } from '@/app/contexts/productsContext'
import { cartIcon } from '../../../public/helpers/icons'

const menuLinks = [
  {
    title: 'Sunglasses',
    link: '/'
  },
  {
    title: 'Eyeglasses',
    link: '/'
  },
  {
    title: 'Promotions',
    link: '/'
  }
]
export default function Header() {
  const { handleNavOptions, cartItems } = useGlassesContext()

  return (
    <div className='flex flex-col sm:flex-row text-xs md:text-sm bg-slate-50 justify-around'>
      <Image src='/logo.jpg' className='hidden md:block' alt='Glasses Logo' width='200' height='30' />
      <nav>
        <ul className='flex flex-col sm:flex-row'>
          {menuLinks.map(
            ({ title, link }) =>
              title &&
              link && (
                <li key={title} className='p-2 sm:p-6'>
                  <Link href={link} onClick={() => handleNavOptions(title)}>
                    {title}
                  </Link>
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
