import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <div className='flex'>
      <Image src='/logo.jpg' alt='Glasses Logo' width='200' height='30' />
      <nav>
        <ul className='flex'>
          {menuLinks.map(
            ({ title, link }) =>
              title &&
              link && (
                <li key={link} className='p-6'>
                  <Link href={link}>{title}</Link>
                </li>
              )
          )}
        </ul>
      </nav>
    </div>
  )
}