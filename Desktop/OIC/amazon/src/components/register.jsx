import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './navbar';
import {useNavigate} from 'react-router-dom';
function Register() {
  const Navigate =  useNavigate()
  const[user,setUser]=useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirm:""
  })
  const[errors,setErrors]=useState({
    nameErr:"",
    emailErr:"",
    phoneErr:"",
    passwordErr:"",
    confirmErr:""
  })
  function handleData(e){
    let name = e.target.name
    let value = e.target.value
     setUser({
       ...user,
       [name]:value
     })
  }
  // function submitData(e){
  //   e.preventDefault()
  //   if(user.name.trim() === "" || user.name.trim() === null){
  //       setErrors((err)=>{
  //         return{
  //           ...err,
  //           nameErr:"Your name is require"
  //         }
  //       })
  //   }
  //   if(user.email.trim() === "" || user.email.trim() === null){
  //     setErrors((err)=>{
  //       return{
  //         ...err,
  //         emailErr :"Your email is required"
  //       }
  //     })
      
  //   }
  //    else if(!(user.email.endsWith('@yahoo.com')||user.email.endsWith("@gmail.com"))){
  //     setErrors((err)=>{
  //       return{
  //         ...err,
  //         emailErr :"Invalid email address"
  //       }
  //     })
  //   }
  //   if(user.phone.trim() === ""|| user.phone.trim() === null){
  //     setErrors((err)=>{
  //       return{
  //         ...err,
  //         phoneErr :"Your phone number is require"
  //       }
  //     })
  //   }
  //   else if(!(user.phone.startsWith('090')||user.phone.startsWith('080')||user.phone.startsWith('070')||user.phone.startsWith('091')||user.phone.startsWith('081'))||user.phone.length !== 11){
  //     setErrors((err)=>{
  //       return{
  //         ...err,
  //         phoneErr:"Invalid phone number"
  //       }
  //     })
  //   }
  //   if(user.password.trim() == ""|| user.password.trim() == null){
  //     setErrors((err)=>{
  //       return{
  //         ...err,
  //         passwordErr :"Your password is require"
  //       }
  //     })
  //   }
  //   else if(!(user.password.length >= 8 )){
  //     setErrors((err)=>{
  //       return{
  //         ...err,
  //         passwordErr:"Your password must be greater than 8 character"
  //       }
  //     })
  //   }
  //   if(user.confirm.trim() == ""|| user.confirm.trim() == null){
  //     setErrors((err)=>{
  //       return{
  //         ...err,
  //         confirmErr :"Please confirm your password"
  //       }
  //     })
  //   }
  //   else if(user.password.trim() !== user.confirm.trim()){
  //     setErrors((err)=>{
  //       return{
  //         ...err,
  //         confirmErr:"password does not match"
  //       }
  //     })
  //   }
  //    else{
  //     // console.log(errors)
  //     let parseUser = JSON.stringify([user])
  //     localStorage.setItem(user.name,parseUser)
  //   }

  // }
  function submitData(e){
   
    e.preventDefault();
    const pushErrors={}
    if(user.name.trim() == ""|| user.name.trim() == null){
      pushErrors.nameErr = "Name is require"
    }
    if(user.email.trim() == ""|| user.email.trim() == null){
      pushErrors.emailErr = "Email is require"
    }else if(!(user.email.endsWith('@yahoo.com')||user.email.endsWith("@gmail.com"))){
      pushErrors.emailErr = "Invalid Email Address"
    }
    if(user.phone.trim() == ""|| user.phone.trim() == null){
      pushErrors.phoneErr = "Your phone is require"
    }else if(!(user.phone.startsWith('090')||user.phone.startsWith('080')||user.phone.startsWith('070')||user.phone.startsWith('091')||user.phone.startsWith('081'))||user.phone.length !== 11){
     pushErrors.phoneErr = "invalid Phone Number"
    }
    if(user.password.trim() == ""|| user.password.trim() == null){
      pushErrors.passwordErr = "password is require"
    }
    if(user.confirm.trim() == ""|| user.confirm.trim() == null){
      pushErrors.confirmErr = "Please confirm your password"
    }else if(user.password.trim() !== user.confirm.trim()){
      pushErrors.confirmErr = "password does not match"
    }
    if(Object.keys(pushErrors).length>0){
      setErrors(pushErrors)
      console.log(pushErrors)
    }else{
      let UserData = [];
      if(localStorage.getItem('eachUser')){
        UserData = JSON.parse(localStorage.getItem('eachUser'))
      }
      UserData.push(user)
      const OriUser = JSON.stringify(UserData)
      localStorage.setItem('eachUser',OriUser)
      Navigate('/login')
      // let parseUser = JSON.stringify([user])
      // localStorage.setItem("users",parseUser)
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
     <form onSubmit={submitData} >
     <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Name....." name='name' onChange={handleData}/>
  <label for="floatingInput">Full Name</label>
  <small style={{color:"red"}}>{errors.nameErr}</small><br />
</div>
<div class="form-floating  mb-3">
  <input type="text" class="form-control" id="floatingPassword" placeholder="email / username" name='email' onChange={handleData}/>
  <label for="floatingInput">Email / Username</label>
  <small style={{color:"red"}}>{errors.emailErr}</small><br />
</div>
     <div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="Phone..." name='phone' onChange={handleData}/>
  <label for="floatingInput">Phone Number</label>
  <small style={{color:"red"}}>{errors.phoneErr}</small><br />
</div>
<div class="form-floating  mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={handleData}/>
  <label for="floatingPassword">Password</label>
  <small style={{color:"red"}}>{errors.passwordErr}</small><br />
</div>
<div class="form-floating  mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" name='confirm' onChange={handleData}/>
  <label for="floatingPassword">Confirm Password</label>
  <small style={{color:"red"}}>{errors.confirmErr}</small><br />
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">Remember Me</label>
</div>
<div className='text-center mt-3'>
  <button className='btn rounded=pill' type='submit'>Submit</button>
</div>

     </form>
     </div>
     </div>
    </div>
    </>
  )
}

export default Register