import React from 'react'
import axios from 'axios'
import Navbar from '../navbar'
import Cloths from '../pages/Cloth'
import { useEffect,useState } from 'react'

function Cloth() {
const [top,setTop]= useState([])
const [cloth,setCloth]= useState([])
const [womens,setWomens]= useState([])

async function TopData(){
  const url = 'https://dummyjson.com/products/category/tops'
  await axios.get(url).then((response)=>{
    setTop(response.data.products)
  })
}
async function ClothData(){
  const url = 'https://dummyjson.com/products/category/mens-shirts'
  await axios.get(url).then((response)=>{
    setCloth(response.data.products)
  })
}
async function WomensData(){
  const url = 'https://dummyjson.com/products/category/womens-dresses'
  await axios.get(url).then((response)=>{
    setWomens(response.data.products)
  })
}
useEffect(()=>{
TopData()
ClothData()
WomensData()
},[])
  return (
    <>
    <Navbar/>
    <div className='image'>
     <div><img src="images/cloth.jpg" alt=""/></div>
      <h1>Fashions</h1>
    </div>
    <div className='ali'>
      <div className='line'><hr /></div>
     <div className='auto-pro'>  <span className='text-center my-4'>Clothes</span></div>
     </div>    <div className='container'>
       <div className='row justify-content-between'>
       {
          top?
          top.map((value,index)=>{
            return(
         <Cloths {...value}/>
      )
          }):
          "Loading"
        }
        {
          cloth?
          cloth.map((value,index)=>{
            return(
         <Cloths {...value}/>
      )
          }):
          "Loading"
        }
        {
            womens?
            womens.map((value,index)=>{
              return(
           <Cloths {...value}/>
        )
            }):
            "Loading" 
        }

       </div>
     </div>
   </>
  )
}

export default Cloth