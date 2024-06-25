
import Header  from '../../Components/Default_c/Header'


function Home() {


  return (
<>

<Header/>


<div className='Home_filter'>
<div className="container text-center">
    <h1 className='fw-bold mt-3 stays_header_text'>Bring the world closer togather</h1>
    <span className='text-sm'>Book hotel && Finde your next stays || Find your best </span>
    <br />




</div>

<div  className='Searchber shadow-sm'>

<div className="location g_filter">
  <span className='text-slate-500'>Where</span><br />
  <b className='text-slate-400'>Select your Destination</b>
</div>
<div className='g_filter flex justify-between align-middle'>

<div className="ceck_days">
  <span className='text-sm'>Start day</span><br />
  <b>1212</b>
</div>

<div className="ceck_days">
  <span className='text-sm'>End day</span><br />
  <b>1212</b>
</div>

</div>

<div className="g_filter  flex justify-between itmes-center"> 
<div className='flex cursor-pointer justify-center items-center'><i className="fa-solid p-2 fa-sliders"></i>Filter</div>
<div className="search_g_l cursor-pointer flex justify-center items-center">
<i className="fa fa-search"></i>
</div>
</div>
</div>


<svg className='rounded-lg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fillOpacity="1" d="M0,96L34.3,101.3C68.6,107,137,117,206,106.7C274.3,96,343,64,411,90.7C480,117,549,203,617,208C685.7,213,754,139,823,117.3C891.4,96,960,128,1029,133.3C1097.1,139,1166,117,1234,96C1302.9,75,1371,53,1406,42.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>

<div className="search_bottom">
slider
</div>


    </div>

</>
  ) 

}

export default Home