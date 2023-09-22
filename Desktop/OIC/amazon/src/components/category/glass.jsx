import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar'
import Glasss from '../pages/Glass'

function Glass() {
  const [glass,setGlass]= useState([])
  function AutoData(){
    const url = 'https://dummyjson.com/products/category/sunglasses?limit=4'
    axios.get(url).then((response)=>{
      setGlass(response.data.products)    
})
  }
  useEffect(()=>{
  AutoData()
  },[])
  return (
    <>
    <Navbar/>
    <div className=' image'>
     <div><img src="images/glass.jpg" alt=""/></div>
      <h1>Sunglasses</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Sunglasses</span></div>
     </div>
         <div className='container'>
       <div className='row justify-content-between'>
        {
        glass?
          glass.map((value,index)=>{
            return(
         <Glasss {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
   </>
  )
}

export default Glass