import React from 'react'
import { Link } from 'react-router-dom'
function Decors(value) {
  return (
<div className='col-lg-3 col-md-4 col-sm-6 col-12 cols'>
    <div className='divbtn'>
      <img src={value.images[2]} alt=""style={{width:"100%",height:"200px"}} />
      <del style={{color:"red"}}>{value.discountPercentage}</del>
    </div>
    <h6 className='text-center'>{value.title}</h6>
    <div className='d-flex justify-content-between py-3'>
    <b>${value.price}</b>
    </div>
    {/* <small>{value.description.slice(0,50)}...</small> */}
    <div className='d-flex justify-content-between'>
      <button className='btn btn-warning'><i className='fas fa-shopping-cart'></i> Add to cart</button>
      <div><Link to={`/details/${value.id}`}> <button className='btn btn-warning'>Details</button></Link></div>
    </div>
</div>  
)
}

export default Decors