import  React,  { useState } from 'react';
// import React, { Component } from 'react'
import { Link } from 'react-router-dom'
function Login(){
    const [style, setStyle] = useState("imgs");
    // const [style2, setStyle2] = useState("right");


    return (
      
      
      <div className="App" id='parent'>
      <p className='imgbk'></p>
        
        <div className="" id={style}>

          <div className="carbg">
              <img id="pic1" src="/Blue.png"/>
          </div>

          <div className="car">
               <img  className="pic2h" src="/carblue.png" />
          </div>
            
        </div>

      
      
        <div className=" row d-flex justify-content-center align-items-center" id="right">
         
       
        <div className='home'>

       <form  className='formlogin'>
        <h3 className='text-primary'>Log In</h3>
        <div className='block'>
        <div className="mb-3">
          
          <label className='lab'>Email Address</label>
          <input
            type="email"
            className="form-control mx-auto"
            placeholder="Enter email"
            required
          />
          
        </div>
        
        <div className="mb-3">
          <label className='lab'>Password</label>
          <input
            type="password"
            className="form-control mx-auto"
            placeholder="Enter password"
            required
          />
 
        </div>
        </div>
          
        <div className="mb-3">
          <div className="custom-control custom-checkbox lab">
            <input
              type="checkbox"
              className="checkbox custom-control-input rmei"
              id="customCheck1"
              
            />
            <label className="custom-control-label rme" For="customCheck1">
              Remember me
            </label>

           <div className='forgdiv'>
              <p className="forget">
                <a className='' href="*">Forget your password?</a>
              </p>
           </div>
          </div>
        </div>
        <div>
          <button type="submit" className='btnlog' id='button'onClick={()=>setStyle("imgs2")}>
            <span> Log in </span> 
          </button>
        </div>
  
        <div className="but1">
          <p >Need an account? &nbsp;
          <Link  className="aa" to={'/sign-up'} >
                Sign up
            </Link>
           </p>
        </div>
        
       
        
       </form>
      </div>
      </div>
      </div>
      
      
    )
    }
export default Login