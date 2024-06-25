import React from 'react'
import { CountryData } from '../../../Components/CountryData';
function Select_location() {
const location =()=>{
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition((loc)=>{
const longitude = loc.coords.longitude;
const latitude = loc.coords.latitude;
const geoapi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ban`

fetch(geoapi)
.then(res=>res.json())
.then(result =>{})
})
}
}

console.log(CountryData)


location();
  return (
    <div className=''>
     <button className='py-2 mr-4 px-4 rounded-lg  text-center bg-blue-600 text-white'>Auto detect Location</button>

     <div className=" flex grid-cols-4 border p-2 py-4 rounded-lg mt-3 ">
      <div className='border rounded-lg'>
        <select className='rounded px-9 py-2'>
          <option className='p-2' value="ban">Bangladesh</option>
        </select>
      </div>

      {/* optons */}

      <div className='border rounded-lg'>
        <select className='rounded px-9 py-2'>
          <option className='p-2' value="ban">Bangladesh</option>
        </select>
      </div>

      <div className='border rounded-lg'>
        <select className='rounded px-9 py-2'>
          <option className='p-2' value="ban">Bangladesh</option>
        </select>
      </div>

      <div className='border rounded-lg'>
        <select className='rounded px-9 py-2'>
          <option className='p-2' value="ban">Bangladesh</option>
        </select>
      </div>




     </div>
     <br />


<div>
<table className="table-auto w-full">
  <thead>
    <tr>
      <th>Country</th>
      <th>Division</th>
      <th>Distric</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bangladesh</td>
      <td>Chittagnong</td>
      <td>Cumiila</td>
    </tr>
 
  </tbody>
</table>
</div>



    </div>
  )
}

export default Select_location
