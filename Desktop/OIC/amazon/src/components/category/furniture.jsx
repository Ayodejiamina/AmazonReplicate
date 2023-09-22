import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar'
import Furnitures from '../pages/Furniture'

function Furniture() {
  const [furniture,setFurniture]= useState([])
  function AutoData(){
    const url = 'https://dummyjson.com/products/category/furniture?limit=4'
    axios.get(url).then((response)=>{
      setFurniture(response.data.products)    
})
  }
  useEffect(()=>{
  AutoData()
  },[])
  return (
    <>
    <Navbar/>
    <div className=' image'>
     <div><img src="images/furt.jpg" alt=""/></div>
      <h1>Furnitures</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Furniture</span></div>
     </div>
         <div className='container'>
       <div className='row justify-content-between'>
        {
          furniture?
          furniture.map((value,index)=>{
            return(
         <Furnitures {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
   </>
  )
}

export default Furniture