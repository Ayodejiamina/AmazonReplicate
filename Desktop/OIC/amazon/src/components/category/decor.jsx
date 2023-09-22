import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Decors from '../pages/Decor'
import Navbar from '../navbar'
function Decor() {
  const [decor,setDecor]= useState([])
  function AutoData(){
    const url = 'https://dummyjson.com/products/category/home-decoration?limit=4'
    axios.get(url).then((response)=>{
      setDecor(response.data.products)    
})
  }
  useEffect(()=>{
  AutoData()
  },[])
  return (
    <>
    <Navbar/>
    <div className=' image'>
     <div><img src="images/decor.jpg" alt=""/></div>
      <h1>Home Decoration</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Home-decoration</span></div>
     </div>    <div className='container'>
       <div className='row justify-content-between'>
        {
          decor?
          decor.map((value,index)=>{
            return(
         <Decors {...value}/>
      )
          }):
          "Loading"
        }

       </div>
     </div>
   </>
  )
}

export default Decor