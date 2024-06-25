import Header from "./Components/Header";
import Profile_menubar from './Components/Profile_menus'

export default function({children}){
    
    return(<div>
        
        <Header/>
       
       <div className="flex profile_cont justify-between items-start">
        <div className="profile_menubar border rounded-2xl p-3 mt-3">

        <Profile_menubar/>
        </div>


        <div className="viewbar p-3"> 

     {children}

        </div>
       </div>
       
       </div>)
}