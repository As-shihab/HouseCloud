import React from 'react'
import Image from 'next/image'
import Img from './animation/animation.gif'
function Selection() {
  return (
    <div>
    <div className="flex justify-around items-center">  <b className='text-2xl mb-4'>Select Your Host Type</b>
  <select className='rounded-lg px-4 mb-4'>
    <option value="hotel">Hotel</option>
    <option value="mess">Mess</option>
    <option value="house">House</option>
  </select>
    </div>
        <br />

        <div className="card-grid grid grid-cols-4 gap-4 mt-3 ">
        <div className="card  p-1  cursor-pointer px-2">
         <Image
         src={Img}
         height={400}
         width={400}
         alt='nature'
         />
         <br />

         <b>Natural</b>
        </div>



        <div className="card  p-1  px-2">
         <Image
         src={Img}
         height={400}
         width={400}
         alt='nature'
         />
         <br />

         <b>Natural</b>
        </div>

        <div className="card  p-1  px-2">
         <Image
         src={Img}
         height={400}
         width={400}
         alt='nature'
         />
         <br />

         <b>Natural</b>
        </div>


        <div className="card  p-1  px-2">
         <Image
         src={Img}
         height={400}
         width={400}
         alt='nature'
         />
         <br />

         <b>Natural</b>
        </div>



        <div className="card  p-1  px-2">
         <Image
         src={Img}
         height={400}
         width={400}
         alt='nature'
         />
         <br />

         <b>Natural</b>
        </div>

        </div>

    </div>
  )
}

export default Selection
