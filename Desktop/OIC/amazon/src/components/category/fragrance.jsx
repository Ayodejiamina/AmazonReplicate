import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar'
import Fragrances from '../pages/Fragrance'

function Fragrance() {
  const [frag,setFrag]= useState([])
  function AutoData(){
    const url = 'https://dummyjson.com/products/category/fragrances?limit=4'
    axios.get(url).then((response)=>{
      setFrag(response.data.products)    
})
  }
  useEffect(()=>{
  AutoData()
  },[])
  return (
    <>
    <Navbar/>
    <div className=' image'>
     <div><img src="images/frag.jpg" alt=""/></div>
      <h1>Fragrance</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Fragrance</span></div>
     </div>   
      <div className='container'>
       <div className='row justify-content-between'>
        {
          frag?
          frag.map((value,index)=>{
            return(
         <Fragrances {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
   </>
  )
}

export default Fragrance