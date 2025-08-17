import React from 'react'
import assets from '../assets/assets'
const Navbar = ({theme, settheme}) => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl
    font-medium bg-white/5- dark:bg-gay-900/70
    '>
      <img src={theme === 'dark' ? assets.logo_dark: assets.logo}  />

    </div>
  )
}

export default Navbar