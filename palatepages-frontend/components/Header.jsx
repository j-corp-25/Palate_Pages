import Link from 'next/link'
import { CiMenuBurger } from 'react-icons/ci'
import { IoCloseOutline } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import React, { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className='bg-light-text'>
      <nav className='flex justify-between items-center w-[90%] mx-auto'>
        <div className='z-50'>
          <img className='w-32 ' src='/logo2.svg' alt='logo' />
        </div>

        <div className={`absolute transition-top duration-500 ease-in-out ${isMenuOpen ? 'top-[11%]' : 'nav-links'} md:static md:min-h-fit bg-light-text min-h-[30vh] left-0 top-[10%] w-full flex md:w-auto items-center px-5 top-[-100%]`}>
          <ul className='flex md:flex-row flex-col md:items-center md:gap-10 gap-10 z-1'>
            <li>
              <Link href='/'>
                <div className='hover:text-main-color'>Home</div>
              </Link>
            </li>
            <li>
              <Link href='/recipes'>
                <div className='hover:text-main-color'>Recipes</div>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <div className='hover:text-main-color'>My Recipes</div>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <div className='hover:text-main-color'>Create Recipe</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6 z-50'>
          <button className='bg-main-color text-light-text px-5 py-2 rounded-full hover:bg-attention-gray hover:text-dark-text font-bold'>
            Sign in
          </button>
          {isMenuOpen ? (
            <IoCloseOutline className='size-10 text-3x1 cursor-pointer md:hidden' onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu className='size-10 text-3x1 cursor-pointer md:hidden' onClick={toggleMenu} />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
