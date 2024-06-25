"use client"
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Link from 'next/link'
import axios from 'axios'
import { DB } from '../../../lib/axios'

function page() {
  const [listing , setListing] =useState('')
  const Create_Listing = async () => {
    const authorid = { authorid: "1l2j23" }
    axios.post('http://localhost:2000/api/user/listing/create', authorid)
      .then(res => { console.log(res.data) })
  }
// getting all listing
useEffect(()=>{
  DB.get('/user/listing/getall')
  .then(res=>{setListing(res.data.result)})
}, [])


  return (
    <div>
      <div className='flex justify-around items-center mt-6'><div><h1 className='text-4xl fw-bold text-blue-400'>Hi</h1></div> <div className='flex justify-center items-center'><Link href="/Pages/User/Listing/Create_Listing" className='no-underline' onClick={Create_Listing}> <i className='fa text-2xl border rounded-lg p-1 fa-plus'></i></Link>  <Link href="/Pages/User/Listing/Draft" className='no-underline '> <button className='py-1 px-3  rounded-lg text-white ml-2 bg-blue-500'>Draft</button> </Link></div></div>

      <div className='grid-rows-4 mt-3 flex gap-3 text-center justify-center items-center'>
        
{Object.values(listing).map(list=>{
  return (
    <div> Cards</div>
  )
})}
      </div>
    </div>
  )
}

export default page
