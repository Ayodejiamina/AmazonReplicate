import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar'
import Shoe from '../pages/Shoes'

function Shoes() {
  const [shoe,setShoes]= useState([])
  const [woman,setWoman]= useState([])
  function AutoData(){
    const url = 'https://dummyjson.com/products/category/mens-shoes'
    axios.get(url).then((response)=>{
      setShoes(response.data.products)    
})
  }
  function WomanData(){
    const url = 'https://dummyjson.com/products/category/womens-shoes'
    axios.get(url).then((response)=>{
      setWoman(response.data.products)    
})
  }
  useEffect(()=>{
  AutoData()
  WomanData()
  },[])
  return (
    <>
    <Navbar/>
    <div className='image'>
     <div><img src="images/shoe.jpg" alt=""/></div>
      <h1>Footwear</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Luxurious Footwear</span></div>
     </div>
         <div className='container'>
       <div className='row justify-content-between'>
        {
          shoe?
          shoe.map((value,index)=>{
            return(
         <Shoe {...value}/>
      )
          }):
          "Loading"
        }
        {
            woman?
            woman.map((value,index)=>{
              return(
           <Shoe {...value}/>
        )
            }):
            "Loading" 
        }

       </div>
     </div>
   </>
  )
}

export default Shoes