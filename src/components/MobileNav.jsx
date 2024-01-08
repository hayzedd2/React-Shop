import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";
const MobileNav = () => {
  return (
    <nav className='px-2 py-2'>
        <div className="flex w-full justify-between">
            <div className="logo">
                <h1 className=' font-afacad text-[1.2rem]'>HaYzedd</h1>
            </div>
            <div className="burger">
                <RiMenu3Fill/>
            </div>
        </div>
    </nav>
  )
}

export default MobileNav