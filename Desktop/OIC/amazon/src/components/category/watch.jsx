import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar'
import Watchs from '../pages/Watch'
function Watch() {
  const [watch,setWatch]= useState([])
  const [women,setWomen]= useState([])
  function WatchData(){
    const url = 'https://dummyjson.com/products/category/mens-watches'
    axios.get(url).then((response)=>{
      setWatch(response.data.products)    
})
  }
  function WWatchData(){
    const url = 'https://dummyjson.com/products/category/womens-watches'
    axios.get(url).then((response)=>{
      setWomen(response.data.products)    
})
  }
  useEffect(()=>{
  WatchData()
  WWatchData()
  },[])
  return (
    <>
    <Navbar/>
    <div className='image'>
     <div><img src="images/watch.jpg" alt=""/></div>
      <h1>Luxury Watches</h1>
    </div>
    <h2 className='text-center my-4'>Luxury Watches</h2>
    <div className='container'>
       <div className='row justify-content-between'>
        {
          watch?
          watch.map((value,index)=>{
            return(
         <Watchs {...value}/>
      )
          }):
          "Loading"
        }
        {
            women?
            women.map((value,index)=>{
              return(
           <Watchs {...value}/>
        )
            }):
            "Loading" 
        }

       </div>
     </div>
   </>
  )
}

export default Watch