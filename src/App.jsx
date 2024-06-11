import { useState } from 'react'
import siteLogo from './assets/logo.png'
import heroSVG from './assets/heroSvg.png'
import heroPerson from './assets/person.png'
import productIcons from './assets/prodjuctIcons.png'
import './App.css'

function App() {
  return (
    <>
      <div className='bg-[#a3fbfb] text-[#0c1639] w-full h-[130vh] relative'>
        <div className='nav px-10 pt-2 flex justify-content-between items-center justify-between'>
          <img src={siteLogo}/>
          <ul className='flex items-center gap-10'>
            <li className='text-xl font-bold'>Our Story</li>
            <li className='text-xl font-bold bg-white px-6 py-2 rounded rounded-full'>Contact</li>
          </ul>
        </div>
        <img className='absolute z-10 inset-x-0 bottom-0' src={heroSVG} />
        
        <div className='hero_text flex justify-center'>
          <h1 className='text-7xl font-bold text-center  w-[50%] pb-10'>Discover, Connect & Instant Delivery From Stores.</h1>
        </div>
        
        <div className='hero_content absolute right-20 z-10 bottom-[-58px] grid justify-center justify-items-center w-full'>
          <div className='hero_banner_images '>
            <div className='banner_product_icons  absolute top-[-60px]'>
              <img className='' src={productIcons} />
            </div>
            <div className='banner_product_person'>
              <img src={heroPerson} />
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
