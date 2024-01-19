import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='bg-light-text'>
      <div className='w-full mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center md:static  sm:justify-between  '>
          <a
            href=''
            className=' flex justify-center w-auto text-center items-center p-1'
          >
            <img src='/logo2.svg' className='w-20' alt='Logo' />
            <span className='self-center  text-2xl font-semibold whitespace-nowrap dark:text-white p-1 mt-5'>
              Palate Pages
            </span>
          </a>
          <ul className='mx-5 flex  sm:w-auto flex-col md:flex-row items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-3'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                About This This Project
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                GitHub
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Source Code
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Connect on LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span class='block text-sm text-gray-500 text-center dark:text-gray-400'>
          Copyright © 2023{' '}
          <a href='' class='hover:underline'>
            Palate Pages
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
