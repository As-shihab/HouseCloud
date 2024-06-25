

import React, { useState } from "react"
import Mob_menu from "../Popup/Menubar"

function Header() {
const PathData = "hello"
const [menubar, setMenubar]=useState(false);
const NavLinks =[
  {id:1 , name:'Stays' , path: '/' , mob_btn: 'fa fa-home'},
  {id:2 , name:'Booking' , path: '/Pages/Booking' , mob_btn:' fa fa-person-walking-luggage'},
  {id:3 , name:'Locals' , path: '/Pages/Locals' , mob_btn: 'fa-solid fa-location-dot'},
  {id:4 , name:'Trendings' , path: '/Pages/Trendings' , mob_btn: 'fa fa-solid fa-bolt'},
]
const Handle_menubar = ()=>{
  alert()
}

  return (
    <header className='header'>

<div className="mob_search"> <i className="fa fa-search"></i></div>
      <div className="header_left"><h1 className='fw-bold text-primary'>AirRent</h1></div>
      {/* header mid started */}
     
        <div className="header_mid text-center">

            {
              NavLinks.map((links)=>{
                return(
                  <>
                  
                  <li key={links.id}   className={ PathData==links.path ? 'active' : 'header_link' } >
                    {/* <Link prefetch={true} href={links.path}>{links.name}</Link> */}
                  </li>
                  </>
                )
              })
            }
      </div>
     
  
      {/* header mid end */}

      {/* Header right */}
      <div className="header_right d-flex align-items-center">

        <div className='right_header_users_info'>

          <span>AirRent your Home  | <i className='fa fa-earth m-2'></i></span>

        </div>

        <div className="header_users_login cursor-pointer" >
          <i className="fa fa-grip" onClick={()=>{setMenubar(!menubar)}}></i>
          <div className="header_user_img" onClick={ ()=>setMenubar(!menubar)}>
            <i className="fa-solid fa-circle-user bg-secondary p-2"></i>
          </div>


<div className={menubar ? " active cursor-auto" : "menu_bar cursor auto"}>

<Mob_menu/>

</div>

     </div>

{/* navber */}

    


  


        </div>

 
  {/* end header right */}






<div className="mob_btn p-3">

<div className="btns flex justify-between align-middle">
  {
    NavLinks.map(btns=>{
      return(
        "hello"
   
//       <Link key={btns.id} className={PathData== btns.path ? "Active" :null} href={btns.path}>
// <i className={btns.mob_btn}></i>
// <span className="text-sm">{btns.name.slice(0 , 7)}</span>
//       </Link>
      )
    })
  }

</div>
</div>


    </header>
  )
}

export default Header