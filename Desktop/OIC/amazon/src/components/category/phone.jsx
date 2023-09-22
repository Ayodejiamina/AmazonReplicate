import React from 'react'
import Phones from '../pages/Phone'
import { useEffect,useState } from 'react'
import Navbar from '../navbar'
import axios from 'axios'

function Phone() {
  const [phone,setPhone]= useState([])
  function AutoData(){
    const url = 'https://dummyjson.com/products/category/smartphones?limit=4'
    axios.get(url).then((response)=>{
      setPhone(response.data.products)    
})
  }
  useEffect(()=>{
  AutoData()
  },[])
  return (
    <>
    <Navbar/>
    <div className=' image'>
     <div><img src="images/phone.jpg" alt=""/></div>
      <h1>Phones & Gadgets</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Smartphones</span></div>
     </div>
         <div className='container'>
       <div className='row justify-content-between'>
        {
          phone?
          phone.map((value,index)=>{
            return(
         <Phones {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
   </>
  )
}

export default Phone