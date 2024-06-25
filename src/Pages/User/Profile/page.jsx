"use client"
import React from 'react'
import Image from 'next/image'
import user from '../../../lib/user'
import { redirect } from 'next/navigation'
export default function page() {

 
  return (
    <div className='p-2 flex gap-2 profile_page justify-between items-start'>
      <div className="p-left p-2 px-1 shadow-sm text-center rounded-lg border">
        <div className="p-img m-2">
          {/* <Image src={img} /> */}
          <i className="fa-upload update-p fw-bold text-4xl cursor-pointer text-gray-300 fa"></i>
        </div>
        <b className="m-1 text-2xl">
          As shihab
        </b>
        <div className="bg-green-100   px-3 rounded-lg">
          <span className="text-green-500  p-1 ">New</span>
        </div>
        <button className="profile_edit py-1 mt-2 rounded-lg px-4 bg-blue-500 text-white">Edit Profile</button>


        <div className="insight  m-1 mt-3">
          {/* config start */}
          <div className="flex flex-col text-left p-2 px-4 bg-slate-100 rounded-lg">
            <span className="text-sm my-1">Notification</span>

            <b className=" text-sm flex  py-1">
              Device can recieve Notification: <span className="text-blue-500">True</span>
            </b>

          </div>



          <div className="flex flex-col mt-2 text-left p-2 px-4 bg-slate-100 rounded-lg">
            <span className="text-sm my-1">Notification</span>

            <b className=" text-sm flex  py-1">
              Device can recieve Notification: <span className="text-blue-500">True</span>
            </b>

          </div>

          <div className="flex flex-col mt-2 text-left p-2 px-4 bg-slate-100 rounded-lg">
            <span className="text-sm my-1">Notification</span>

            <b className=" text-sm flex  py-1">
              Device can recieve Notification: <span className="text-blue-500">True</span>
            </b>

          </div>


          {/* config end */}

        </div>


      </div>
      {/* creating listing profile */}



      {/* right , view side start */}

      <div className="p-right rounded-lg text-center flex flex-col justify-between p-2 border">
    
{/* card container */}
    <div className="flex gap-2">

{/* card start */}
    <div className="border p-right-card rounded-lg">

<div className="flex justify-around p-3 items-end ">

<div className="l-text-p">
    <h1>4$</h1>
    <span>shold be fraid</span>
  </div>

  <div className="l-p-svg flex items-end opacity-80 ml-1 gap-1 justify-around">

     
    <div className="chart-1  chart"></div>
    <div className="chart-2  chart"></div>
    <div className="chart-3 chart"></div>
    
  </div>
</div>

</div>

<div className="border p-right-card rounded-lg">

<div className="flex justify-around p-3 items-end ">

<div className="l-text-p">
    <h1>4$</h1>
    <span>shold be fraid</span>
  </div>

  <div className="l-p-svg flex items-end opacity-80 ml-1 gap-1 justify-around">

     
    <div className="chart-1  chart"></div>
    <div className="chart-2  chart"></div>
    <div className="chart-3 chart"></div>
    
  </div>
</div>

</div>


<div className="border p-right-card rounded-lg">

<div className="flex justify-around p-3 items-end ">

<div className="l-text-p">
    <h1>4$</h1>
    <span>shold be fraid</span>
  </div>

  <div className="l-p-svg flex items-end opacity-80 ml-1 gap-1 justify-around">

     
    <div className="chart-1  chart"></div>
    <div className="chart-2  chart"></div>
    <div className="chart-3 chart"></div>
    
  </div>
</div>

</div>

{/* card end */}

    </div>
{/* end card container */}


{/* bottom p started */}


<div className="rounded-lg shadow-sm mt-3 p-2 w-full">

<div className="flex pb-1 px-2  gap-2 items-center border-b">
  <button>Default</button>
  <button>Config</button>
</div>



<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


</div>

{/* end p */}
      </div>

    </div>
  )
}
