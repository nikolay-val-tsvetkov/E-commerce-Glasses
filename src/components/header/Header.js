import Image from 'next/image'
import Link from 'next/link'
import { heartIcon } from '../../../public/data/icons'

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
  },
  {
    title: heartIcon,
    link: '/'
  }
]
export default function Header() {
  return (
    <div className='flex bg-slate-50'>
      <Image src='/logo.jpg' alt='Glasses Logo' width='200' height='30' />
      <nav>
        <ul className='flex'>
          {menuLinks.map(
            ({ title, link }) =>
              title &&
              link && (
                <li key={title} className='p-6'>
                  <Link href={link}>{title}</Link>
                </li>
              )
          )}
        </ul>
      </nav>
    </div>
  )
}
