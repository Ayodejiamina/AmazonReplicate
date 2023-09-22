import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar'
import Laptops from '../pages/Laptop'
function Laptop() {
  const [lap,setLap]= useState([])
  function LapData(){
    const url = 'https://dummyjson.com/products/category/laptops?limit=4'
    axios.get(url).then((response)=>{
      setLap(response.data.products)    
})
  }
  useEffect(()=>{
  LapData()
  },[])
  return (
    <>
    <Navbar/>
    <div className=' image'>
     <div><img src="images/lap.jpg" alt=""/></div>
      <h1>Laptops</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Laptops</span></div>
     </div>
         <div className='container'>
       <div className='row justify-content-between'>
        {
          lap?
          lap.map((value,index)=>{
            return(
         <Laptops {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
   </>
  )
}

export default Laptop