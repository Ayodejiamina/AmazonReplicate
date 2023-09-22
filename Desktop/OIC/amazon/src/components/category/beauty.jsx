import React from 'react'
import axios from 'axios'
import Beautys from '../pages/Beauty'
import Navbar from '../navbar'
import { useEffect,useState } from 'react'

function Beauty() {
  const [beauty,setBeauty] = useState([])
  function BeautyData(){
    const url = 'https://dummyjson.com/products/category/skincare?limit=4'
    axios.get(url).then((response)=>{
      setBeauty(response.data.products)    
})
  }
  useEffect(()=>{
  BeautyData()
  },[])
  return (
    <>
    <Navbar/>
    <div className='image'>
     <div><img src="images/make.jpg" alt=""/></div>
      <h1>Beauty & Makeover</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Skincare Products</span></div>
     </div>     <div className='container'>
       <div className='row justify-content-between'>
        {
          beauty?
          beauty.map((value,index)=>{
            return(
         <Beautys {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
   </>
  )
}

export default Beauty