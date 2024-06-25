"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Header() {
    const PathData = usePathname()
    const NavLinks =[
        {id:1 , name:'Listing' , path: '/Pages/User/Listing' , mob_btn: 'fa fa-home'},
        {id:2 , name:'Booking' , path: '/' , mob_btn:' fa fa-person-walking-luggage'},
        {id:3 , name:'Locals' , path: '/Pages/Locals' , mob_btn: 'fa-solid fa-location-dot'},
        {id:4 , name:'Trendings' , path: '/Pages/Trendings' , mob_btn: 'fa fa-solid fa-bolt'},
      ]
  return (
 <header className='user-header flex items-center p-2 justify-around'>
<Link className='no-underline text-blue-500' href={'/'}><h4 className='text-green-500  '>HOST PROFILE</h4></Link>

 <nav className='flex justify-around items-center'>


{
     
    }

{/* navlinks */}


 </nav>
<div className='flex justify-center items-center'><button className='mr-3'>Swich visitor</button> <div className='profile_img'>
    {/* <Image
    src=
    alt='user photo'
   layout='fill'
    /> */}
    user img
    </div> </div>
 </header>
  )
}

export default Header
