import React from "react";
import Navbar from "./navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Details() {
  const [detail, setDetail] = useState([]);
  const {id} = useParams();
  function DEtData() {
    const url = "https://dummyjson.com/products";
    axios.get(url).then((response) => {
      setDetail(response.data.products);
    });
  }
  useEffect(() => {
    DEtData();
  }, []);
  const navigate = useNavigate()
  const [localStorageLength, setLocalStorageLength] = useState(0);

  useEffect(() => {
    setLocalStorageLength(localStorage.length);
  }, []);
  
  const getData = JSON.parse(localStorage.getItem('eachUser'))
  function logout(){
    localStorage.clear()
    navigate('/')
  }
 
  return (
    <>
      <>
    <div className='container-fluid conta '>
    <div className=' pt-2  d-flex justify-content-between contas '>
     <div className='divlogo'>  <a class="navbar-brand text-white" href="/"><img src="images/images-removebg-preview.png" alt="" className='logo' /></a></div> 
     <div className='deli'>  <a class="nav-link active d-flex text-white" aria-current="page" href="#"><i className='fas fa-location-dot pt-1'></i>Delivery</a></div>
     <div class="input-group fori" >
            <span class="input-group-text  w-35">All</span>
            <input type="search" class="form-control" id='search' placeholder='Search Amazon'/>
            <span class="input-group-text bg-warning text-white"><i className='fas fa-search'></i></span>
          </div>
         <div><a class="nav-link dropdown-toggle text-white drops
        " href="#" role="button" data-bs-toggle="dropdown">EN</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">Arabic</a></li>
            <li><a class="dropdown-item" href="#">Others</a></li>
          </ul></div> 
          {
          getData ?
          <div className='sign'> <a class="nav-link dropdown-toggle text-white " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Hello,signin <br/>
          <b>Account & List</b>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" onClick={logout} >Logout</a></li>
        </ul></div>
        :  
        <div className='sign'> <a class="nav-link dropdown-toggle text-white " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Hello,signin <br/>
        <b>Account & List</b>
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li><a class="dropdown-item" href="/register">Register</a></li>
          <li><a class="dropdown-item" href="/login">Login</a></li>
    
      </ul>
      </div>
          }
        
          <div className='deli'>  <a class="nav-link active d-flex text-white" aria-current="page" href="/blog"><i className='fas fa-location-dot pt-1'></i>Blog</a></div>
          <div className='order'><a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">My Account</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/profile">My Account</a></li>
            <li><a class="dropdown-item" href="#">Orders</a></li>
            <li><a class="dropdown-item" href="/cart">Carts</a></li>
          </ul></div>
          <div className='return'><a class="nav-link active text-white" aria-current="page" href="#">Return<b >& Orders</b></a></div>
          <div className='cart'>
            <i className='fas fa-shopping-cart pt-3' style={{fontSize:"37px",}}></i>
             <div className='empty-num'>
                 <span class="badge badge-pill badge-danger">{localStorageLength}</span>
              </div>
          </div>
    </div>
    </div>
      <div className='all p-0 m-0'>

    
      <button class="bt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <i className='fas fa-bars'></i> All</button>
 
 <div class="offcanvas offcanvas-start"  tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
   <div class="offcanvas-header">
     <img id="offcanvasRightLabel" src='images/images-removebg-preview.png' style={{height:"50px",width:"100%"}}/>
    
     <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   </div>
   <div class="offcanvas-body">
     <ul>
       <li><a href="/phone"><i className='fas fa-tablet'></i> Phones & Tablet</a></li>
       <li><a href="/laptop"><i className='fas fa-laptop'></i> Laptops</a></li>
       <li><a href="/beauty"><i className='fas fa-magic'></i> Beauty & Makeup</a></li>
       <li><a href="/furniture"><i className='fas fa-chair'></i> Furnitures</a></li>
       <li><a href="/cloth"><i className='fas fa-tshirt'></i> Cloths</a></li>
       <li><a href="/shoe"><i className='fas fa-shoe-prints'></i> Shoes</a></li>
       <li><a href="/grocery"><i className='fas fa-utensils'></i> Groceries</a></li>
       <li><a href="/decor"><i className='fas fa-home'></i> Home Decoration</a></li>
       <li><a href="/watch"><i className= "fas fa-stopwatch"></i> Watches</a></li>
       <li><a href="/car"><i className='fas fa-car'></i> Automotive</a></li>
       <li><a href="/glass"><i className='fas fa-binoculars'></i> Sunglasses</a></li>
       <li><a href="/perfume"><i className='fas fa-spray-can'></i> Fragrance</a></li>
       <li><a href="/bag"><i className='fas fa-shopping-bag'></i> Bags</a></li>
     </ul>
   </div>
 </div>
 </div>
 <nav class="navbar navbar-expand-lg navbar-light nav py-1">
  <div class="container text-center">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse deals" id="navbarTogglerDemo02">
   
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 px-5">
  
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Today's Deals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  active text-white" href="#">Customer Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  active text-white">Registry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  active text-white">Gift Cards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  active text-white">Sell</a>
        </li>
      </ul>
      <ul>
        
      </ul>
      <div className='ps-5'>
        <span className=''>Deals with Electronic</span>

      </div>
    </div>
  </div>
</nav> 
 </>
      {detail
        ? detail.map((value, index) => {
            if(value.id == id) {
              return (
                <div className="container-fluid my-5">
                  <div className="container d-flex">
                    <div className="imas">
                      <img src={value.images[0]} alt="" />
                    </div>
                    <div className="ms-5">
                      <h3>{value.title}</h3>
                      <div>
                        <b>Price: <span>{value.price}</span></b>
                        <b className="mx-5 ">Discount: <span>{value.discountPercentage}</span></b>
                      </div>
                      <small>{value.description}</small>
                    </div>
                  </div>
                  <div className="container">
                    <h2 className="text-center">Related Images</h2>
                    <div className="rela">
                      <img src={value.images[1]} alt="" />
                      <img src={value.images[2]} alt="" />
                      <img src={value.images[3]} alt="" />
                    </div>
                  </div>
                </div>
              );
            }
          })
        : "Loading..."
        }
    </>
  );
}
export default Details;
