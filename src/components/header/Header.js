import Image from 'next/image'
import Link from 'next/link'
import { useGlassesContext } from '@/app/contexts/productsContext'

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
  const { handleNavOptions } = useGlassesContext()

  return (
    <div className='flex  bg-slate-50'>
      <Image src='/logo.jpg' className='hidden sm:block' alt='Glasses Logo' width='200' height='30' />
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
    </div>
  )
}
