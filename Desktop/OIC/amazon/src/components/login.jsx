import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import Navbar from './navbar';

function Login() {
  const navigate = useNavigate()
  const[data,setData]= useState({
    email:"",
    password:""
})
  const[error,setError]= useState({
    emailErr:"",
    passwordErr : ""
  }
  )
  const handleLog = (e)=>{
    let name = e.target.name
    let prEvalue = e.target.value

    setData({
      ...data,
      [name]:prEvalue
    })
  }
  function submitData(e){
    e.preventDefault();
    const logError = {}
    if(data.email == ""){
     logError.emailErr = "Email is required"
    }
    if(data.password== ""){
      logError.passwordErr ="Password is required"
    }
    if(Object.keys(logError).length>0){
      setError(logError)
    }else{
      let isLoggedIn = localStorage.getItem('eachUser')
      // console.log(isLoggedIn)
      if(isLoggedIn){
        let parseLog = JSON.parse(isLoggedIn)
        parseLog.map((value,index)=>{
           if(data.email == value.email && data.password == value.password){
          alert("you have loggedin successfully") 
          navigate('/')
        }
        else{
         alert("Invalid email or password") 
    
        }
        })
        // let validate = parseLog.filter((value)=>{
        //   return value.email == data.email && value.password == data.password
        // })
        // if(validate){
        //   alert("you have loggedin successfully") 
        //   //   navigate('/')
        // }
        // else{
        //   alert("Invalid email or password") 
        // }
        
      }
    }


    


  }

 
   


  return (
    <>
     {/* <Navbar/> */}
    <div className='container-fluid'>
      <div className='row'>
      <div class="col-md-4 offset-md-4 p-3 form">
      <div className='links '>  <a class="navbar-brand text-white" href="/"><img src="images/das.png" alt="" className='logo' /></a></div> 
     <div className='links'><a href="/register"><h5>Register</h5></a> <span>/</span> <a href="/login"><h5>Login</h5></a></div>
     <form action="" method='post' onSubmit={submitData}>
    
<div class="form-floating  mb-3">
  <input type="email" class="form-control" id="floatingPassword" placeholder="Email..." name='email' onChange={handleLog}/>
  <label for="floatingInput" style={{color:'black'}}>Email</label>
  <small style={{color:"red"}}>{error.emailErr}</small>
</div>
    
<div class="form-floating  mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={handleLog}/>
  <label for="floatingPassword">Password</label>
  <small style={{color:"red"}}>{error.passwordErr}</small>
</div>
<div className='text-center mt-3'>
  <button className='btn rounded=pill' type='submit'>Submit</button>
</div>
    <div className='my-3'>
        <div class="text-center"><span>Or Login with</span></div>
    </div>
    <div className='icon'>
     <a href=""><i className='fab fa-facebook face mx-2'></i></a>
      <a href=""><i className='fab fa-twitter twit mx-2'></i></a>
     <a href=""><i className='fab fa-instagram insta mx-2'></i></a>
     <a href="https://wa.me/08107905908"><i className='fab fa-whatsapp what mx-2'></i></a>
    <a href="https://google.com"><i className='fab fa-google goo mx-2'></i></a>
    </div>

     </form>
     </div>
     </div>
    </div>
    </>
  )
}

export default Login