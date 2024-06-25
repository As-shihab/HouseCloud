"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
export default function Profile_menubar() {
  const PathData = usePathname()
  const NavLinks = [
    { id: 1, name: 'Profile', path: '/Pages/User/Profile', mob_btn: 'fa fa-solid fa-user' },
    { id: 2, name: 'Listing', path: '/Pages/User/Listing', mob_btn: 'fa fa-home' },
    { id: 3, name: 'Draft', path: '/Pages/User/Listing/Draft', mob_btn: ' fa fa-person-walking-luggage' },
    { id: 4, name: 'Locals', path: '/Pages/Locals', mob_btn: 'fa-solid fa-location-dot' },
    { id: 5, name: 'Trendings', path: '/Pages/Trendings', mob_btn: 'fa fa-solid fa-bolt' },
  ]
  return (
    <nav className='profile_menus gap-3'>
      {
      NavLinks.map((links) => {
        return (


     

            
          <Link className={`no-underline user_link flex ${PathData == links.path ? `bg-blue-500 text-white`: null} shadow-sm  p-3 rounded-2xl flex-col  tex-center items-center`} prefetch={true} href={links.path}>
                        <i  className={`mb-2  fw-bold text-4xl fa ${links.mob_btn}`}></i>

                        <span>{links.name}</span>
          </Link>

        )
      })
      }
    </nav>
  )
}
