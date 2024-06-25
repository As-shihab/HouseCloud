import React from 'react'
import animaiton from "./animation/animation.gif"
import Image from 'next/image'
function Home() {
  return (
    <div className="flex items-center justify-around w-full">
      
<div className='mr-6 '>
<h1 className='text-6xl mb-4 fw-bold'>Submit your Home to <span className='text-blue-500'>Cloud</span></h1>
<span>Click next </span>
</div>

      <div className='ml-6 overflow-hidden'>
      <Image
        src={animaiton}
        alt='home alt'
       height={600}
       width={600}
        />
      </div>
    </div>
  )
}

export default Home
