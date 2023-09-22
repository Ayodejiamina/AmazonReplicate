import React from 'react'
import { Link } from 'react-router-dom'
function Auto(value) {
  function addCart(e){
    let name = e.target.parentNode.previousElementSibling.previousElementSibling.innerHTML
    let price = e.target.parentNode.previousElementSibling.firstChild.innerHTML
    let image= e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.alt
    const all_item = JSON.stringify([name,image,price])
    localStorage.setItem(name,all_item);

    console.log(price,name,image)
  }
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
      <button className='btn btn-warning' onClick={addCart}><i className='fas fa-shopping-cart'></i> Add to cart</button>
      <div><Link to={`/details/${value.id}`}> <button className='btn btn-warning'>Details</button></Link></div>
    </div>
</div>
  )
}

export default Auto