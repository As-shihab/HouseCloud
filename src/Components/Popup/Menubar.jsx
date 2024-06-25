
import user from '../../lib/user'
function Mob_menu() {
const SignOut = async ()=>{
  localStorage.removeItem('access_token');
  setTimeout(() => {
    location.reload()
  }, 1000);
}
  return (
    
    <div className='data d-menubar'>

{
  !user()?
  <div className="auth">
<Link  href="/Pages/Auth/Login">Login</Link>
 <Link href="/Pages/Auth/SignUp">SignUp</Link>
</div>


:   <div className="auth">
 <i onClick={SignOut} className="fa cursor-pointer rotate-180 fa-sign-out"></i>
 <Link href="/Pages/User/Profile">Profile</Link>
</div>
}
{/* should be after auth */}

<Link className='navlink' href="/Pages/User/Listing">Add listiing</Link>
{/* end auth  */}
<Link className='navlink' href="/Pages/Auth/Login">Terms & Conditions</Link>
 <Link className='navlink' href="/Pages/Auth/SignUp">Get next stays</Link>

 <Link className='navlink' href="/Pages/Auth/Login">Visit help center</Link>
 <Link className='navlink' href="/Pages/Auth/SignUp">About</Link>

    </div>
  )
}

export default Mob_menu