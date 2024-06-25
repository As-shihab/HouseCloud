"use client"
import axios from 'axios';
import React, { useState } from 'react'
import Image from 'next/image';

export default function Descript() {
  const [file , setFile]=useState(null);
  const [isloading , setLoading]=useState(false)
  const [progress , setProgress]=useState()


// druggin file

  const FileSubmit = (e)=>{
    {isloading ? null : 
      document.querySelector('.fileup').click()
    }

  }


 

// sendingfile data to server


const SubmitFile = ()=>{
  const formdata = new FormData();
  setLoading(true)

for(let i = 0 ; i < file.length ; i++){
  formdata.append('file' , file[i])

}

axios.post('http://localhost:2000/api/user/listing/fileupload' , formdata , {onUploadProgress : e=>{setProgress(e.loaded)}})
.then(res=>{console.log(res.data) ; setFile(null); setLoading(false)})
}



  return (
  <>
    <div className='flex w-full'>
       <div className="druging border text-center w-80  cursor-pointer card p-4" onClick={file == null ? FileSubmit : null}>
        <input type="file" className='fileup' accept='image/*' multiple hidden onChange={(e)=>setFile(e.target.files)}/>
        <i  className={`fa fa-cloud-arrow-up mb-1 text-7xl text-blue-500 p-2 ${file==null? `text-blue-300`: `text-blue-500`} `}></i>
        <button className={`rounded-lg p-1  ${file==null? `bg-blue-300`: `bg-blue-500`} text-white  text-center`} onClick={SubmitFile}>{file?"Click to Upload": isloading?"Uploading wait.." : "Select Picturs"}</button>
        <br />
        <p className='text-sm opacity-50'>Acceptable only JPG ,PNG , JPEG </p>
       </div>

       <div className="file_list overflow-y-scroll w-80 gap-2 card ml-2 px-3  py-2 ">
        {/* file list */}
      

{
  file?

  Object.values(file).map(tod=>{

    
    return(
    <div className=" border flex  items-center p-2 rounded">
    <i className="fa-solid fa-image mr-3 text-2xl"></i>
     <span className="file-name max-h-14 overflow-hidden text-sm opacity-90"><b>{JSON.stringify(tod.name).substring(1, 12)}</b>
     <br />
     <progress className='rounded' id="file" value={progress} max="100">  </progress> {progress ? Math.floor(progress / 1024 / 1024)+"MB": '0MB'}
     </span>

    </div>
  )})
  :    <div className=" opacity-50 border flex  items-center p-2 rounded">
  <i className="fa-solid fa-image mr-3 text-2xl"></i>
   <span className="file-name text-sm opacity-90"><b>Select File</b>
   <br />
   <progress className='rounded' id="file" value={progress} max="100">  </progress> {progress ? Math.floor(progress / 1024 / 1024)+"MB": '0MB'}
   </span>

  </div>
}

        
         {/* end file list */}
       </div>
     <br />
   
    </div>
  
 <br />
{/* show image */}
 <div className="card">

{/* <Image


/> */}

 </div>
  
  </>
  )
}
