import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../navbar'
import axios from 'axios'
import Auto from '../pages/auto'
function Automotive() {
  const [auto,setAuto]= useState([])
  function AutoData(){
    const url = 'https://dummyjson.com/products/category/automotive?limit=4'
    axios.get(url).then((response)=>{
      setAuto(response.data.products)    
})
  }
  useEffect(()=>{
  AutoData()
  },[])
  return (
    <>
    <Navbar/>
     <div className='image'>
      <div><img src="images/car1 - Copy.jpg" alt=""/></div>
       <h1>Automobile</h1>
     </div>
     <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Automotive Products</span></div>
     </div>
   
     <div className='container'>
       <div className='row justify-content-between'>
        {
          auto?
          auto.map((value,index)=>{
            return(
         <Auto {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
    </>
  )
}

export default Automotive