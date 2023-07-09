import axios from "axios";
import Navbar from "./navbar";
import { useEffect, useState } from "react";

import React from 'react';
import { FiEdit } from "react-icons/fi";
import { MdOutlineAddAPhoto } from "react-icons/md";

import { useLocation } from "react-router-dom";

function Profile(props){

    let location = useLocation();
    let token='';
    let userId='';
    if(location?.state?.data?.props != null){
      token=location.state.data.props.token;
      userId=location.state.data.props.userId;
    }
    else  if(location?.state?.data != null){
      token=location.state.data.token;
      userId=location.state.data.userId;
    }
    console.log(token);
    ///////////////////////////////
    
useEffect(() =>{
    const dragArea= document.querySelector(' .drag-areaa');
    const dragText= document.querySelector('.headerr');
    const icon= document.querySelector('.photoCam');
    let file;
    let button =document.querySelector('.buttonn');
    let input =document.querySelector('.browse');

    if(button){
      button.onclick=()=>{
        input.click();
    };
    }
    if(input){
    // when browse
    input.addEventListener('change', function(){
      file=this.files[0];
      displayFile()
    })
    }
    

    
    
    if(dragArea){
    //when file is inside the drag area
    dragArea.addEventListener('dragover',(event)=>{
      event.preventDefault();
      dragText.textContent='Release to Upload';
      icon.classList.add('active');
    });
    
  
    
    //when file leave the drag area
    dragArea.addEventListener('dragleave',()=>{
      dragText.textContent='Drop your image here,';
      icon.classList.remove('active')
    });
   
    dragArea.addEventListener('drop',(event)=>{
      event.preventDefault();
      file=event.dataTransfer.files[0];
      displayFile()
    });
    }
    
    
    function displayFile(){
      let fileType=file.type;
    let validExtensions=['image/jpeg', 'image/jpg','image/png'];
    
    if(validExtensions.includes(fileType)){
      let fileReader=new FileReader();
    
      fileReader.onload=()=>{
        let fileURL = fileReader.result;
        let imgTag = `<img src="${fileURL}" alt=""/>`;
        dragArea.innerHTML=imgTag;
      };
      fileReader.readAsDataURL(file);
    }else{
      alert('This file is not an Image');
    }
    }
/////////////////
const edituserid = async()=>{
axios.get(`https://car-mate-t012.onrender.com/api/v1/users/profile`,{ headers: {
  'Content-Type': 'application/json',
  'authorization': 'Bearer ' + token
}}).then((response)=>{
console.log(response.data.message);
setUserEdit(response.data.message)
})
.catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
    }
          else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser 
          // and an instance of http.ClientRequest in node.js
          console.log(error.request);
          console.log('Error: ', error.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error: ', error.message);
          alert('You are not logged in please log in first.');
        }
    });
  }
  edituserid();
  },[token]);
  const[userEdit,setUserEdit]=useState({FirstName:"",LastName:"",email:"",PhoneNumber:""});
    //////////////////////////
    const handleEdit=(e)=>{
      setUserEdit({...userEdit, [e.target.name]:e.target.value});
    }
    return( 
    <>
    <body className="bgmarket">

      <div>
        <Navbar token={token} userId={userId}/>
      </div>
      <img src='profilebackground.png' className='imgbk2' alt='background'></img>
  <div id="bag">
      <div className="drag-areaa " >
        <div className="iconimg">
            <MdOutlineAddAPhoto className="photoCam"></MdOutlineAddAPhoto>
        </div>
        <span className="headerr">Drop your Photo here</span>
      </div>
      <img src='car mate-01.png' className='logopro2'  alt='project logo'></img>

      <div className="edit buttonn">
        <FiEdit className="editIcon"></FiEdit>
      </div>
      <input className="browse" type="file" hidden/>

      <div className="profData ">
       <div class="input-container t0">
         <input 
         name="FirstName"
         placeholder="First Name" 
         class="input-field if0" type="text" 
         value={userEdit.FirstName}
         onChange={(e)=>handleEdit(e)} 
         />
         <label htmlFor="input-field" class="input-label">First NAME</label>
         <span class="input-highlight"></span>
         {/* <FiEdit className="editIconT"></FiEdit> */}
       </div>
       <div class="input-container t1">
         <input 
         name="LastName"
         placeholder="Last Name" 
         class="input-field if1" type="text" 
         value={userEdit.LastName}
         onChange={(e)=>handleEdit(e)} 
         />
         <label htmlFor="input-field" class="input-label">Last NAME</label>
         <span class="input-highlight"></span>
         <FiEdit className="editIconT"></FiEdit>
       </div>
       <div class="input-container t2">
         <input placeholder="* * * * * * * *" class="input-field" type="password"/>
         <label htmlFor="input-field" class="input-label">PASSWORD</label>
         <span class="input-highlight"></span>
         <FiEdit className="editIconT"></FiEdit>
       </div>
       <div class="input-container t3">
         <input 
         name="email"
         placeholder="Enter Your Email" 
         class="input-field" 
         type="email"
         value={userEdit.email}
         onChange={(e)=>handleEdit(e)} 
         />
         <label htmlFor="input-field" class="input-label">EMAIL</label>
         <span class="input-highlight"></span>
         <FiEdit className="editIconT"></FiEdit>
       </div>
       <div class="input-container t4">
         <input 
         name="PhoneNumber"
         placeholder="Enter Your Phone Number" 
         class="input-field" 
         type="tel"
         value={userEdit.PhoneNumber}
         onChange={(e)=>handleEdit(e)} 
         />
         <label htmlFor="input-field" class="input-label">PHONE NUMBER</label>
         <span class="input-highlight"></span>
         <FiEdit className="editIconT"></FiEdit>
       </div>
       <div class="input-container t5">
         <input placeholder="250,000" class="input-field if5" type="password"/>
         <label htmlFor="input-field" class="input-label">MONEY</label>
         <span class="input-highlight"></span>
       </div>

      </div>


  </div>
</body>
    </> 
    )
}
export default Profile;