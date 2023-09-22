import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function AllProduct() {
    const [product,setProduct] = useState([])

    //  console.log(url)

   async function FetchData(){
    const url = "https://dummyjson.com/products?limit=12&skip=10"
     await axios.get(url).then((response)=>{
        // console.log(response )
        setProduct(response.data.products)
     })

       
    }
    useEffect(()=>{
    FetchData()
    },[])

    //    const{id,title,description,price,discountPercentage,images,thumbnail,rating,stock,brand} = value
  return (
    <div className='container-fluid'>
    <div className=' justify-content-between' style={{display:'flex',flexWrap:'wrap'}}>
  {
    product ?
     product.map((value,index)=>{
        return(
      
        <div className='m-auto' >
          <div class="card" style={{width:'17rem',border:'none', boxShadow:'5px 5px 10px grey',height:'530px',margin:"10px 0px"}}>
  <img src={value.thumbnail} class="card-img-top img-fluid w-100 h-50 " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <span className='bg-danger text-white mt-3'>{value.discountPercentage} %off</span>
    <br />
    <p>${value.price}</p>
    <small>{value.description}</small>
  </div>
          </div>
      </div>
      )
     })
     :"Loading...."
  }
    </div>
    
    
    </div>
  )
}

export default AllProduct