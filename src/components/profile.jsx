import axios from "axios";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import React from 'react';
import { FiEdit } from "react-icons/fi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FaExpeditedssl } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "./product";
import ProductRent from './productRent';
import { Link } from "react-router-dom";

function Profile(){
  const navigate = useNavigate();

  const [input,setInput] = useState({
    password: '',
    newpassword: '',
    confirmpassword: '',

  });

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
    let tokrnn=token;

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
          alert('You are not logged in please log in first.');
          navigate('/Market',{
            state: {
                token: {tokrnn},
                userId: {userId}
            },
          });
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
  function editBack(){
    let data={
      FirstName: userEdit.FirstName,
      LastName: userEdit.LastName,
      PhoneNumber: userEdit.PhoneNumber,
      email:userEdit.email
    }
    axios.patch(`https://car-mate-t012.onrender.com/api/v1/users`,data,{ headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    } }).then((response)=>{
    console.log(response.status,response);

    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message);
        alert(error.response.data.message);
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
      }
  });
  }
  function changePass(){
    let data={
      password:input.password,
      newPassword:input.newpassword,
      confirmPassword:input.confirmpassword
    }
    axios.post(`https://car-mate-t012.onrender.com/api/v1/users/changePassword`,data,{ headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    } }).then((response)=>{
    console.log(response.status,response);
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message);
        alert(error.response.data.message);
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
      }
  });
  }
  const[userEdit,setUserEdit]=useState({FirstName:"",LastName:"",email:"",PhoneNumber:""});
    //////////////////////////
    const handleEdit=(e)=>{
      setUserEdit({...userEdit, [e.target.name]:e.target.value});
    }
    const onInputChange = e => {
      const { name, value } = e.target;
      setInput(prev => ({
        ...prev,
        [name]: value
      }));
    }
    //////////////////////////
    const [visible, setVisible] = useState(3);
    const showAll1 = () =>{
      setVisible((prevValue =>userEdit.Favorites.length))
    }
    const showAll2 = () =>{
      setVisible((prevValue =>userEdit.Owns.length))
    }
    const showAll3 = () =>{
      setVisible((prevValue =>userEdit.ownRents.length))
    }
    const showAll4 = () =>{
      setVisible((prevValue =>userEdit.Rented.length))
    }
    const showAll5 = () =>{
      setVisible((prevValue => userEdit.Purchased.length))
    }
    return( 
    <>
    <body className="bgmarket">

      <div>
        <Navbar token={token} userId={userId}/>
      </div>
      <img src='profilebackground.png' className='imgbk2'  alt='background'></img>
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
       <div className="input-container t0">
         <input 
         name="FirstName"
         placeholder="First Name" 
         className="input-field if0" type="text" 
         value={userEdit.FirstName}
         onChange={(e)=>handleEdit(e)} 
         />
         <label htmlFor="input-field" className="input-label">First NAME</label>
         <span className="input-highlight"></span>
       </div>
       <div className="input-container t1">
         <input 
         name="LastName"
         placeholder="Last Name" 
         className="input-field if1" type="text" 
         value={userEdit.LastName}
         onChange={(e)=>handleEdit(e)} 
         />
         <label htmlFor="input-field" className="input-label">Last NAME</label>
         <span className="input-highlight"></span>
         <FiEdit className="editIconT"></FiEdit>
       </div>
       <div className="input-container t2">
         <input placeholder="old password" className="input-field if2" type="password" name="password" onChange={onInputChange}/>
         <label htmlFor="input-field" className="input-label">CURRENT PASSWORD</label>
         <span className="input-highlight"></span>
         <FaExpeditedssl onClick={changePass} className="editIconT"></FaExpeditedssl>
       </div>       
       <div className="input-container t21">
         <input placeholder="new password" className="input-field if21" type="password" name="newpassword" onChange={onInputChange}/>
         <label htmlFor="input-field" className="input-label">NEW PASSWORD</label>
         <span className="input-highlight"></span>
       </div>       <div className="input-container t22">
         <input placeholder="confirm password" className="input-field if22" type="password" name="confirmpassword" onChange={onInputChange}/>
         <label htmlFor="input-field" className="input-label">CONFIRM PASSWORD</label>
         <span className="input-highlight"></span>
       </div>
       <div className="input-container t3">
         <input 
         name="email"
         placeholder="Enter Your Email" 
         className="input-field" 
         type="email"
         value={userEdit.email}
         onChange={(e)=>handleEdit(e)} 
         />
         <label htmlFor="input-field" className="input-label">EMAIL</label>
         <span className="input-highlight"></span>
         <FiEdit className="editIconT"></FiEdit>
       </div>
       <div className="input-container t4">
         <input 
         name="PhoneNumber"
         placeholder="Enter Your Phone Number" 
         className="input-field" 
         type="tel"
         value={userEdit.PhoneNumber}
         onChange={(e)=>handleEdit(e)} 
         />
         <label htmlFor="input-field" className="input-label">PHONE NUMBER</label>
         <span className="input-highlight"></span>
         <FiEdit className="editIconT"></FiEdit>
       </div>
       <div className="input-container t5">
         <input  className="input-field if5" type="double" value={userEdit.Balance} readOnly/>
         <label htmlFor="input-field" className="input-label">BALANCE</label>
         <span className="input-highlight"></span>
       </div>

<button onClick={editBack} className="t6">Edit</button>
      <hr className="khat"/>
      </div>

      <div className="lists">
      <div className="list1">
          <h2>Favorites</h2>
          <p className="showall" onClick={showAll1}>Show All</p>
      <div id="cards" className="row row-cols-1 col-lg row-cols-md-3 gy-5 gx-0 cards ">
      {userEdit.Favorites && userEdit.Favorites.length > 0 && userEdit.Favorites !== undefined ? userEdit.Favorites.slice(0,visible).map((item) =>{
        return(
             <div className="col cardp" key={item._id}  >
                 <Link state={{ data:  {token:token, userId:userId} }} to={`/product/${item._id}`}  className="noink" >
                  <Product prodcut={item} token={token} userId={userId}/>
               </Link>
             </div>
        )
    }) : "NO DATA"
}
      </div>
      </div>
      <hr className="khat2"/>

      <div className="list2">
      <h2>Upload to Marketplace</h2>
      <p className="showall" onClick={showAll2}>Show All</p>
      <div id="cards" className="row row-cols-1 col-lg row-cols-md-3 gy-5 gx-0  cards ">
      {userEdit.Owns && userEdit.Owns.length > 0 && userEdit.Owns !== undefined ? userEdit.Owns.slice(0,visible).map((item) =>{
        return(
             <div className="col cardp" key={item._id}  >
                 <Link state={{ data:  {token:token, userId:userId} }} to={`/product/${item._id}`}  className="noink" >
                  <Product prodcut={item} token={token} userId={userId}/>
               </Link>
             </div>
        )
    }) : "NO DATA"
}
      </div>
      </div>
      <hr className="khat2"/>

      <div className="list3">
      <h2>Upload to Rent</h2>
      <p className="showall" onClick={showAll3}>Show All</p>
      <div id="cards" className="row row-cols-1 col-lg row-cols-md-3 gy-5 gx-0  cards ">
      {userEdit.ownRents && userEdit.ownRents.length > 0 && userEdit.ownRents !== undefined ? userEdit.ownRents.slice(0,visible).map((item) =>{
       return(
        <div className="col cardp" key={item._id}  >
            <Link state={{ data:  {token:token, userId:userId} }} to={`/rents/${item._id}`}  className="noink" >
             <ProductRent prodcut={item} token={token} userId={userId}/>
          </Link>

        </div>
   )
    }) : "NO DATA"
}
      </div>
      </div>
      <hr className="khat2"/>

      <div className="list4">
      <h2>Rent</h2>
      <p className="showall" onClick={showAll4}>Show All</p>
      <div id="cards" className="row row-cols-1 col-lg row-cols-md-3 gy-5 gx-0  cards ">
      {userEdit.Rented && userEdit.Rented.length > 0 && userEdit.Rented !== undefined ? userEdit.Rented.slice(0,visible).map((item) =>{
       return(
        <div className="col cardp" key={item._id}  >
            <Link state={{ data:  {token:token, userId:userId} }} to={`/rents/${item._id}`}  className="noink" >
             <ProductRent prodcut={item} token={token} userId={userId}/>
          </Link>

        </div>
   )
    }) : "NO DATA"
}
      </div>
      </div>
      <hr className="khat2"/>

      <div className="list5">
      <h2>Orders</h2>
      <p className="showall" onClick={showAll5}>Show All</p>
      <div id="cards" className="row row-cols-1 col-lg row-cols-md-3 gy-5 gx-0  cards ">
      {userEdit.Purchased && userEdit.Purchased.length > 0 && userEdit.Purchased !== undefined ? userEdit.Purchased.slice(0,visible).map((item) =>{
        return(
             <div className="col cardp" key={item._id}  >
                 <Link state={{ data:  {token:token, userId:userId} }} to={`/product/${item._id}`}  className="noink" >
                  <Product prodcut={item} token={token} userId={userId}/>
               </Link>
             </div>
        )
    }) : "NO DATA"
}
      </div>
      </div>
     </div>
     
  </div>
</body>
    </> 
    )
}
export default Profile;