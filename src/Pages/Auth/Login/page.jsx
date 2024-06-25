"use client"

import { useState } from "react";
import Image from "next/image";
import Img from "../Assets/l_desk.jpg"
import Link from "next/link";
import { redirect } from "next/navigation";
import { DB } from "../../../lib/axios";
import user from "../../../lib/user";



export default function page() {

if((user())){
  redirect('/')
}


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isload, setLoading] = useState(false)
  const [massege, setMassege] = useState('')
  const Handle_Login = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      emailphone: email,
      password: password,
    }

    await DB.post('/auth/login', data)
      .then(res => {
        setLoading(false);
        setMassege(res.data);
        localStorage.setItem('access_token', res.data.token);


      })

      .catch(err => console.log(err))

  }

  {
    massege.code == 209 ?
location.reload() :null
  
  }
  return (
    <div className="l-desk flex justify-around h-screen items-center">

      <div className="l-desk-left">

        <div className="l-desk_blure h-screen-full">
          <Image
            src={Img}
            width={400}
            height={400}
            alt="Blure"
          />
        </div>

        <div className="l-desk-content w-full">
          <h1 className=" font-['Ubuntu Sans Mono'] text-blue-600 font-bold ml-4">Let's have an account</h1>
          <font className="ml-4 font-nano text-sm">If you don't  have account </font>
          <br />
          <Link className="ml-4 border-blue-500 mt-4" href="/Pages/Auth/SignUp">Create account <i className="fa fa-arrow-right"></i></Link>
        </div>

      </div>
      <div className="client_log">

        <form onSubmit={Handle_Login}>
          <h1 className="log_header mb-4">Back to world</h1>

          <div className={`mb-3 ${massege.code == 205 ? `text-red-500 ${massege.massage}` : null}  ${massege.code == 405 ? `text-red-500 ${massege.massage}` : null}`}>{massege.code == 205 ? massege.massege : massege.code == 405 ? massege.massege : null}</div>

          <p>Login account</p>


          <div className="inputs">
            <div className="relative w-full my-3 min-w-[200px] h-10">
              <input onChange={(e) => setEmail(e.target.value)}
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " /><label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Email or Phone
              </label>
            </div>
          </div>

          <div className="inputs">
            <div className="relative w-full min-w-[200px] h-10">
              <input onChange={(e) => setPassword(e.target.value)}
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " /><label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Password
              </label>
            </div>
          </div>

          <span className="flex bt-none py-2">Don't have account ? <Link className="ml-1 border-blue-500 " href="/Pages/Auth/SignUp">SignUP <i className="fa fa-arrow-right"></i></Link></span>
          <div className="inputs my-3">
            <button disabled={isload ? true : massege.code == 209 ? true : false} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{isload ? "Loading" : massege.code == 209 ? "Redirecting" : "LogIn"} </button>
          </div>


        </form>

      </div>

    </div>
  )
}
