import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar'
import Grocerys from '../pages/Grocery'

function Grocery() {
  const [groc,setgroc]= useState([])
  function GrocData(){
    const url = 'https://dummyjson.com/products/category/groceries?limit=4'
    axios.get(url).then((response)=>{
      setgroc(response.data.products)    
})
  }
  useEffect(()=>{
  GrocData()
  },[])
  return (
    <>
    <Navbar/>
    <div className=' image'>
     <div><img src="images/groc.jpg" alt=""/></div>
      <h1>Grocery</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Groceries</span></div>
     </div>
         <div className='container'>
       <div className='row justify-content-between'>
        {
          groc?
          groc.map((value,index)=>{
            return(
         <Grocerys {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
   </>
  )
}

export default Grocery