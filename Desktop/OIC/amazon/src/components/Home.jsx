import React from 'react'
import AllProduct from './AllProduct'
import axios from 'axios'
import {useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
    const [localStorageLength, setLocalStorageLength] = useState(0);
 const[searchData,setSearch] = useState([])
 const handleClick = () => {
   let search = document.getElementById('search').value 
   const url = `https://dummyjson.com/products/search?q=${search}`
   axios.get(url).then(response=>{
      setSearch(response.data.products)
      console.log(response)
  })
  }
  useEffect(()=>{
handleClick()
setLocalStorageLength(localStorage.length);

  },[])
 
  const getData = JSON.parse(localStorage.getItem('eachUser'))
  function logout(){
    localStorage.clear()
    navigate('/')
  }


  return (
    <>
      <div className='container-fluid conta '>
    <div className=' pt-2  d-flex justify-content-between contas '>
     <div className='divlogo'>  <a class="navbar-brand text-white" href="/"><img src="images/images-removebg-preview.png" alt="" className='logo' /></a></div> 
     <div className='deli'>  <a class="nav-link active d-flex text-white" aria-current="page" href="#"><i className='fas fa-location-dot pt-1'></i>Delivery</a></div>
     <div class="input-group fori" >
            <span class="input-group-text  w-35">All</span>
            <input type="search" class="form-control" id='search' placeholder='Search Amazon'/>
            <button class="input-group-text bg-warning text-white" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className='fas fa-search'></i></button>
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
          <div className='order'><a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">My Account</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/profile">My Profile</a></li>
            <li><a class="dropdown-item" href="#">Orders</a></li>
            <li><a class="dropdown-item" href="/cart">Carts</a></li>
          </ul></div>
          <div className='deli'>  <a class="nav-link active d-flex text-white" aria-current="page" href="/blog"><i className='fas fa-location-dot pt-1'></i>Blog</a></div>
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
      {/* <div className='load' ref={loaderRef}>
        <div className='loader'></div>
      </div> */}
<div>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner caro">
    <div class="carousel-item active">
      <img src="images/caro1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/caro2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/caro3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/caro4.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/caro5.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className='container row1'>
 <div className='row justify-content-between'>
  <div className='col-lg-3 col1 '>
 <h4 className='text-center'>Gaming Accessories </h4>
   <div className='d-flex eachs'>
 <div className='each'>
    <img src="images/game1.webp" alt="" className='img-fluid'/>
    <p>Headset</p>
 </div>
 <div className='each'>
    <img src="images/game2.jpg" alt="" className='img-fluid'/>
    <p>Keyboard</p>
 </div>
 <div className='each'>
    <img src="images/game3.webp" alt="" className='img-fluid'/>
    <p>Computer Mice</p>
 </div>
 <div className='each'>
    <img src="images/shop1.jpg" alt="" className='img-fluid'/>
    <p>Chairs</p>
 </div>

   </div>
   <a href="" style={{textDecoration:"none"}}>See More</a>
  </div>
  <div className='col-lg-3 col1 '>
 <h4 className=' text-center'>Top Deal </h4>
  <div className=' text-center'><img src="images/kids-corner_300x400v2.png" alt=""  className='img-fluid' style={{width:"100%",height:"300px"}}/></div>
  <p className='pt-5 text-danger'>Today Great Deal</p>
  <a href="" style={{textDecoration:"none"}}>See All Deals</a>

  </div>
  <div className='col-lg-3 col1'>
 <h4 className=' text-center'>Easy updates for elevated spaces </h4>
   <div className='d-flex eachs'>
 <div className='each'>
    <img src="images/kit.jpg" alt="" className=''/>
    <p>Jeans under 50%</p>
 </div>
 <div className='each'>
    <img src="images/kit1.jpg" alt="" className=''/>
    <p>Tops under 50%</p>
 </div>
 <div className='each'>
    <img src="images/bath2.jpg" alt="" className=''/>
    <p>Dresses under 50%</p>
 </div>
 <div className='each'>
    <img src="images/post4.jpg" alt="" className=''/>
    <p>Shoes under 50%</p>
 </div>

   </div>
   <a href="" style={{textDecoration:"none"}}>See All Deals</a>

  </div>
  <div className='col-lg-3 col1'>
  <div> <h4>Sign in for the best experience </h4>
   <div className='text-center'><button className='btn btn-warning w-75'>Sign in securely</button></div>
   </div>
   <div className='mt-5 text-center'>
    <img src="images/gif1.gif" alt="" style={{height:"340px",width:"90%"}}/>
   </div>
   <div>

   </div>
  </div>
  <div className='col-lg-3 col1'>
 <h4 className=' text-center'>Shop deals in fashion</h4>
   <div className='d-flex eachs'>
 <div className='each'>
    <img src="images/prod13.jpg" alt="" className=''/>
    <p>Jeans under 50%</p>
 </div>
 <div className='each'>
    <img src="images/prod14.jpg" alt="" className=''/>
    <p>Tops under 50%</p>
 </div>
 <div className='each'>
    <img src="images/prod15.jpg" alt="" className=''/>
    <p>Dresses under 50%</p>
 </div>
 <div className='each'>
    <img src="images/prod16.jpg" alt="" className=''/>
    <p>Shoes under 50%</p>
 </div>

   </div>
   <a href="" style={{textDecoration:"none"}}>See All Deals</a>

  </div>
  <div className='col-lg-3 col1 '>
 <h4 className=' text-center'>Toys under $30 </h4>
  <div className=' text-center'><img src="images/post1.webp" alt=""  className='img-fluid' style={{width:"100%",height:"350px"}}/></div>
  <p className='pt-5 text-danger'>Today Great Deal</p>
  <a href="" style={{textDecoration:"none"}}>See All Deals </a>

  </div>
  <div className='col-lg-3 col1 '>
 <h4 className=' text-center'>Electronics </h4>
  <div className=' text-center'><img src="images/Clearance (1).gif" alt=""  className='img-fluid' style={{width:"100%",height:"350px"}}/></div>
  <a href="" style={{textDecoration:"none"}}>See More </a>

  </div>
  <div className='col-lg-3 col1 '>
 <h4 className=' text-center'>Health & Personal Care</h4>
  <div className=' text-center'><img src="images/prod12.jpg" alt=""  className='img-fluid' style={{width:"100%",height:"350px"}}/></div>
  <a href="" style={{textDecoration:"none"}} className='mt-5'>See More </a>
  </div>
 </div>
</div>
<div className='container-fluid row1'>
  <h2 className='text-center'>Available Products</h2>
   <AllProduct/>
</div>
<div className='container-fluid text-center bord my-5 pt-5 pb-4'>
<p>See Personalize Recommendations</p>
<div><a href="/register"><button className='btn btn-warning'>Sign In</button></a></div>
<p>New customer? Start here</p>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Available Products</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='container-fluid'>
        <div className='row justify-content-between'>
         {
          searchData ?
          searchData.map((value,index)=>{
            return(
              <div className='col-lg-6 col-md-6 col-sm-6 my-3 py-3 starcol'>
                 <div className='divbtn'>
                    <img src={value.images[1]} alt=""style={{width:"100%",height:"200px",objectFit:"cover"}} className='img-fluid' />
                    <button type="button" class="btn btn-light">
                  {value.discountPercentage}
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">off</span>
                  </button>
                  </div>
                  <div className='stars'><i className='fas fa-star '></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star fa-spin'></i></div>
                  <h6 className='text-center'>{value.title}</h6>
                  <div className='py-3'>
                  <b>${value.price}</b>
                  </div>
                  <div className='text-center'>
                    <button className='btn btn-warning text-white'>Add to cart</button>
                  </div>
              </div>
            )
          })
          :"Loading"
         }
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Home