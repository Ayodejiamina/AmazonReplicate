import React from 'react'
import Navbar from "./navbar";
function User(){
    const user = JSON.parse(localStorage.getItem('eachUser'))
    console.log(user)
    return(
<>
<Navbar/>
<div className='container-fluid'>
    <div className='container'>
<h1 style={{color:"orange"}}>Account Overview</h1>
<div className='row justify-content-between  res'>
    <div className='col-lg-5 cola'>
    <h2>Account Details</h2><hr/>
     <p><b>Name:</b>{user&&user[0].name}</p>
 <p><b>Email:</b>{user&&user[0].email}</p>
        
    </div>
    <div className='col-lg-5 cola'>
     <h2>Account Book</h2><hr/>
     <p>Your default shipping address</p>
     <p>No default shipping address available</p>
     <div className='butca'><p style={{color:"orange",fontSize:"20px"}}>Add Default Address</p></div>
    </div>
    <div className='col-lg-5 cola'>
     <h2>Amazon Store Credit</h2><hr/>
     <div style={{color:"navy"}}><i className='fas fa-credit-card'></i>     <span>#0.00</span></div>
    </div>
    <div className='col-lg-5 cola'>
     <h2>Newsletter Prefrences</h2><hr/>
     <p>You are not subscribe to any of our newsletters</p>
     <p>No default shipping address available</p>
     <div style={{color:"orange",fontSize:"20px"}}>Edit news letter</div>
    </div>

</div>
</div>
</div>



<span className='vert'>lorenmnbhbhghghggg</span>


</>
)
}
export default User;