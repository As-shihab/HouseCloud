"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {DB} from '../../../../lib/axios'

export default function page() {

const [draft , setDraft]=useState('')

useEffect(()=>{
    
    DB.get('user/listing/get')
.then(res=>{setDraft(res.data.result)})
},[])

if(draft){
   
}
  return (
    <div>
      <div className='flex justify-around items-center mt-6'><div><h1 className='text-5xl fw-bold text-blue-400'>Hi</h1></div>       <input type='search' className='px-4 py-2 border rounded-lg w-2/5' placeholder='Type to search'/>  <div className='flex justify-center items-center'>

        <Link href="/Pages/User/Listing/Create_Listing" className='no-underline'> <i className='fa text-2xl border rounded-lg p-1 fa-plus'></i></Link>  </div></div>

      <div className='grid-rows-4 mt-3 flex gap-3 text-center justify-center items-center'>

       {Object.values(draft).map(drafs=>{
        return (
            <div className='card' key={drafs.id}> hello </div>
        )
       })}

       
      </div>
    </div>
  )
}
