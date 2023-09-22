import React from 'react'

function Footer() {
  // const loaderRef = useRef(); 
  //  const handleLoad = () => {
  //   alert('working successfully');
  //   if(loaderRef.current){
  //      loaderRef.current.style.display = "none"
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('load', handleLoad);

  //   // return () => {
  //   //   window.removeEventListener('load', handleLoad);
  //   // };
  // }, []); 
  return (
    <div className='container-fluid'>
    <div className='row justify-content-between row2 py-3'>
<div className='col-lg-3 col-md-6 col-sm-12 py-5'>
<a class="navbar-brand text-white" href="/"><img src="images/images-removebg-preview.png" alt="" style={{width:"180px",height:"60px"}} /></a>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
<h5>New To Amazon?</h5>
<p>Subscribe to our newsletter to get an update on our latest offers!</p>
<div className='d-flex inp'>
<input type="email" placeholder='📧Enter Email Address' className='mx-1' />
<button className='btn btn-outline-light mx-1'>Male</button>
<button className='btn btn-outline-light'>Female</button>
</div>
</div>
<div className='col-lg-4 col-md-6 col-sm-12 mt-2'>
  <div className='d-flex'>
<div><img src="images/amazongif.gif" alt="" style={{width:"50px",height:"50px"}}/></div>
<div className='ms-3 '>
  <h5>DOWNLOAD AMAZON FREE APP</h5>
  <p>Get access to exclusive offers!</p>
</div>
  </div>
  <div className='d-flex divsb py-3'>
  <button className='btn btn-outline-light mx-1 d-flex'><i className='fas fa-apple-alt'></i><p>Download on the <br /><b>App Store</b></p></button>
  <button className='btn btn-outline-light mx-1 d-flex'><i className='fab fa-google-play'></i><p>Get it on <br /><b>Google Play</b></p></button>
  </div>
</div>
    </div>
<div className='row row3 py-3'>
<div className='col-lg-3 col-md-4 col-sm-6 col-6'>
<h6 className='py-3'>NEED HELP?</h6>
<p>Help Center</p>
<p>Contact Us</p>
<p>How to shop on amazon</p>
<p>Delivery options and timeline</p>
<p>How to return a product on jumia</p>
<p>Corporate and bulk purchases</p>
<p>Report a product</p>
<p>Ship your package anywhere in nigeria</p>
</div>
<div className='col-lg-3 col-md-4 col-sm-6 col-6'>
<h6 className='py-3'>About Amazon</h6>
<p>About us</p>
<p>Amazon express</p>
<p>Amazon careers</p>
<p>Terms and conditions</p>
<p>Privacy notice</p>
<p>Amazon credit</p>
<p>Cookie notice</p>
<p>Amazon global</p>
<p>Flash sales</p>
<p>Amazon anniversary</p>
</div>
<div className='col-lg-3 col-md-4 col-sm-6 col-6'>
<h6>Make Money With Amazon</h6>
<p>Sell on amazon</p>
<p>Becomes a sale consultant</p>
<p>Becomes a logistic service partner</p>
<p>Join the amazon D.A academy</p>
<p>Join the amazon KDL program</p>
</div>
<div className='col-lg-3 col-md-4 col-sm-6 col-12 colf'>
<form action="">
  <div style={{borderBottom:"1px solid orange"}}><p>Sign in or Create Account</p></div>
  <h6 className='pt-2'>Get the latest deals and more</h6>
 <div style={{borderBottom:"1px solid orange"}} className='py-3'>
  <input type="email" placeholder='Enter Email Address' />
  <button className='btn btn-warning ms-1'>Sign Up</button>
 </div>
 <div className='d-flex' style={{borderBottom:"1px solid orange"}}>
   <i className='fas fa-tablet ic pt-1'></i>
   <div className='mx-3'>
    <h5>Amazon app</h5>
    <a href="">Learn more <i className='fas fa-angle-right'></i></a>
   </div>
 </div>
 <div style={{borderBottom:"1px solid orange"}} className='py-3 icons'>
    <i className='fab fa-facebook mx-3'></i>
    <i className='fab fa-instagram mx-3'></i>
    <i className='fab fa-whatsapp mx-3'></i>
    <i className='fab fa-google mx-3'></i>
   </div>
   <div >

   </div>
</form>

</div>
</div>
    </div>
  )
}

export default Footer