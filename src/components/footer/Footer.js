import React from 'react'

const linkedinProfile = 'https://www.linkedin.com/in/nikolay-tsvetkov-b185bba4/'

const Footer = () => {
  return (
    <>
      <h2 className='font-bold'>Glasses E-commerce App</h2>
      <div>
        <a href={linkedinProfile} target='_blank'>
          LinkedIn Profile
        </a>
      </div>
      <div>
        <a href='https://e-commerce-glasses.vercel.app/' target='_blank'>
          Vercel Deploy
        </a>
      </div>
      <div>
        <a href='https://nikolay-val-tsvetkov.github.io/E-commerce-Glasses/' target='_blank'>
          GitHub Pages
        </a>
      </div>
    </>
  )
}

export default Footer
