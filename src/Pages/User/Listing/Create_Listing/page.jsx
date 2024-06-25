"use client"
import React, { useState } from 'react'
import Home from './Progessors/Home'
import Selection from './Progessors/Selection'
import Select_location from './Progessors/Select_location'
import Descript from './Progessors/Descript'
import Pricing from './Progessors/Pricing'
import Allset from './Progessors/Allset'
export default function page() {
    const [progerss ,setProgress]=useState(0)

    const Next_Handle= ()=>{
        setProgress(progerss + 20)
    }
    const Back_Handle = ()=>{
        setProgress(progerss - 20)
    }
  return (
    <div>
  
    
<div className="listing_pre_cont mt-6 absolute left-50">

{ progerss < 20 ?  <Home/> : progerss < 40 ? <Selection/> : progerss < 60 ? <Select_location/> : progerss < 80 ? <Descript/> : progerss < 100 ? <Pricing/> : <Allset/>}
</div>





    <footer className=' progress-cont'>
        <div className="progressbar">
<div className='progerss-data  w-full h-full' style={{width: progerss+"%"}}></div>
        </div>
        <div className="progresser  flex justify-between items-center px-7 ">
{progerss < 19 ? null :         <button disabled={progerss < 1 ? true : progerss == 100 ? true : false} onClick={Back_Handle} type="button" className="text-white bg-stone-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-4 py-1.5   focus:outline-none ">Back</button>}
        <button disabled={progerss > 99 ? true : false} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={Next_Handle}>{progerss > 95 ? "You are all set" : "Next"}</button>
        </div>
    </footer>
    
    </div>
  )
}
