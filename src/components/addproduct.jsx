import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {BsImages} from 'react-icons/bs'
import {TbCurrentLocation} from 'react-icons/tb'

function AddProduct(props){
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

//////////////////drop image//////////////////
const dragArea1= document.getElementById('img1');
const dragArea2= document.getElementById('img2');
const dragArea3= document.getElementById('img3');
const dragArea4= document.getElementById('img4');
const dragText1= document.querySelector('.header');
const dragText2= document.getElementById('header2');
const dragText3= document.getElementById('header3');
const dragText4= document.getElementById('header4');

let file;
let btn =document.querySelector('.button');
let btn2 =document.getElementById('button2');
let btn3 =document.getElementById('button3');
let btn4 =document.getElementById('button4');
let iput =document.querySelector('.browse');
let iput2 =document.getElementById('browse2');
let iput3 =document.getElementById('browse3');
let iput4 =document.getElementById('browse4');
if(btn){
btn.onclick=()=>{
  iput.click();
};

// when browse
iput.addEventListener('change', function(){
  file=this.files[0];
  dragArea1.classList.add('active')
  displayFile1()
})
}

if(btn2){
btn2.onclick=()=>{
  iput2.click();
};

iput2.addEventListener('change', function(){
  file=this.files[0];
  dragArea2.classList.add('active')
  displayFile2()
})
}

if(btn3){
btn3.onclick=()=>{
  iput3.click();
};

iput3.addEventListener('change', function(){
  file=this.files[0];
  dragArea3.classList.add('active')
  displayFile3()
})
}
if(btn4){
  btn4.onclick=()=>{
    iput4.click();
  };

iput4.addEventListener('change', function(){
  file=this.files[0];
  dragArea4.classList.add('active')
  displayFile4()
})
}


if(dragArea1){
//when file is inside the drag area
dragArea1.addEventListener('dragover',(event)=>{
  event.preventDefault();
  dragText1.textContent=('Release to Upload');
  dragArea1.classList.add('active');
});
}

if(dragArea2){
dragArea2.addEventListener('dragover',(event)=>{
  event.preventDefault();
  dragText2.textContent=('Release to Upload');
  dragArea2.classList.add('active');
  // console.log('File is inside the drag area');
});
}

if(dragArea3){
dragArea3.addEventListener('dragover',(event)=>{
  event.preventDefault();
  dragText3.textContent=('Release to Upload');
  dragArea3.classList.add('active');
  // console.log('File is inside the drag area');
});
}

if(dragArea4){
dragArea4.addEventListener('dragover',(event)=>{
  event.preventDefault();
  dragText4.textContent=('Release to Upload');
  dragArea4.classList.add('active');
});
}

if(dragArea1){
//when file leave the drag area
dragArea1.addEventListener('dragleave',()=>{
  dragText1.textContent=('Drop your images here, or')
  dragArea1.classList.remove('active');
});
}

if(dragArea2){
dragArea2.addEventListener('dragleave',()=>{
  dragText2.textContent=('Drop your images here, or')
  dragArea2.classList.remove('active');
});
}

if(dragArea3){
dragArea3.addEventListener('dragleave',()=>{
  dragText3.textContent=('Drop your images here, or')
  dragArea3.classList.remove('active');
});
}

if(dragArea4){
dragArea4.addEventListener('dragleave',()=>{
  dragText4.textContent=('Drop your images here, or')
  dragArea4.classList.remove('active');
});
}

if(dragArea1){
//when the file is dorpped in drag area
dragArea1.addEventListener('drop',(event)=>{
  event.preventDefault();
  file=event.dataTransfer.files[0];
  displayFile1()
});
}

if(dragArea2){
dragArea2.addEventListener('drop',(event)=>{
  event.preventDefault();
  file=event.dataTransfer.files[0];
  displayFile2()
});
}

if(dragArea3){
dragArea3.addEventListener('drop',(event)=>{
  event.preventDefault();
  file=event.dataTransfer.files[0];
  displayFile3()
});
}

if(dragArea4){
dragArea4.addEventListener('drop',(event)=>{
  event.preventDefault();
  file=event.dataTransfer.files[0];
  displayFile4()
});
}

function displayFile1(){
  let fileType=file.type;
let validExtensions=['image/jpeg', 'image/jpg','image/png'];

if(validExtensions.includes(fileType)){
  let fileReader=new FileReader();

  fileReader.onload=()=>{
    let fileURL = fileReader.result;
    let imgTag = `<img src="${fileURL}" alt=""/>`;
    dragArea1.innerHTML=imgTag;
  };
  fileReader.readAsDataURL(file);
}else{
  alert('This file is not an Image');
  dragArea1.classList.remove('active')
}
}

function displayFile2(){
  let fileType=file.type;
let validExtensions=['image/jpeg', 'image/jpg','image/png'];

if(validExtensions.includes(fileType)){
  let fileReader=new FileReader();

  fileReader.onload=()=>{
    let fileURL = fileReader.result;
    let imgTag = `<img src="${fileURL}" alt=""/>`;
    dragArea2.innerHTML=imgTag;
  };
  fileReader.readAsDataURL(file);
}else{
  alert('This file is not an Image');
  dragArea2.classList.remove('active')
}
}

function displayFile3(){
  let fileType=file.type;
let validExtensions=['image/jpeg', 'image/jpg','image/png'];

if(validExtensions.includes(fileType)){
  let fileReader=new FileReader();

  fileReader.onload=()=>{
    let fileURL = fileReader.result;
    let imgTag = `<img src="${fileURL}" alt=""/>`;
    dragArea3.innerHTML=imgTag;
  };
  fileReader.readAsDataURL(file);
}else{
  alert('This file is not an Image');
  dragArea3.classList.remove('active')
}
}

function displayFile4(){
  let fileType=file.type;
let validExtensions=['image/jpeg', 'image/jpg','image/png'];

if(validExtensions.includes(fileType)){
  let fileReader=new FileReader();

  fileReader.onload=()=>{
    let fileURL = fileReader.result;
    let imgTag = `<img src="${fileURL}" alt=""/>`;
    dragArea4.innerHTML=imgTag;
  };
  fileReader.readAsDataURL(file);
}else{
  alert('This file is not an Image');
  dragArea4.classList.remove('active')
}
}


//////////////////////////////////////////
const [name,setName] = useState("");
const [price,setPrice] = useState(0);
const [condition,setCondition] = useState("");
const [description,setDescription] = useState("");
const [quantity,setQuantity] = useState(0);
const [type,setType] = useState("");
const [address,setAddress] = useState("");
///////////////LOCACTION////////////////
const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);

useEffect(() =>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            (error) =>{
                console.error(error);
            }
        );
    }else{
        console.error('Geolocation is not supported by this browser.');
    }
},[]);
//////////////////////////////////////

///////////////////////////////////
  const formSubmit =(e)=>{
    e.preventDefault();
  let data={
    summery: "aa",
    Name: name,
    Condition: condition,
    Description: description,
    Price: price,
    Quantity: quantity,
    Type: type,
    Location: {
        type: "Point",
        Cordinates: [
          latitude,
          longitude
        ],
        Address: address
    }
}
  axios.post(`https://car-mate-t012.onrender.com/api/v1/prodcuts/add`,data,{ headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + token
  } }).then((response)=>{
  console.log(response.data);
  
  })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Error: ', error.response.data.message);
        alert(error.response.data.message);
  
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
    return( 
<>
<body className="bgmarket">
   <div>
     <Navbar token={token} userId={userId}/>
   </div>
   
   <div className="cont">
   <h2 className="Marketheader p-0">Add New Product </h2>

   <form className="p-5 formlogin" onSubmit={formSubmit}>
  <div className=" bigCont">
    <div className=" smallCont">

  <div className="form-group mb-5">

    <label htmlFor="productName">
      Product Name
    </label><br/>

    <input 
    type="text" 
    className="inputAddPro" 
    id="productName" 
    aria-describedby="emailHelp" 
    required
    onChange={(e)=>setName(e.target.value)}
    />
  </div>

     <label htmlFor="Condition">
      Condition
    </label>
    <div className="form-group mb-5">
     <input
      type="radio"
      name="radioInline"
      className="inputCondition"
      id="inlineRadio1"
      value="New"
      onChange={(e)=>setCondition(e.target.value)}
      />
     <label className="radio-inline labelCondition">
     New
     </label>
     <input
      type="radio"
      name="radioInline"
      className="inputCondition"
      id="inlineRadio2"
      value="Used"
      onChange={(e)=>setCondition(e.target.value)}
      /> 
     <label className="radio-inline labelCondition">
      Used
     </label>
  </div>

  <div className="form-row mb-5 input3">
    <div className=" col-md-4 inlineInputs">
      <label >Category</label>
      <select name="Type" className="inputAddPro" id="inputCategory" onChange={(e)=>setType(e.target.value)}>
      <option hidden>select ...</option>
      <option value={"Car"}>Car</option>
      <option value={"Accessorie"}>Accessorie</option>
      <option value={"Car Part"}>Car Part</option>
      </select>
    </div>

    <div className=" col-md-3 inlineInputs">
      <label >Quantity</label>
      <input type="number" className="inputAddPro" min={0} onChange={(e)=>setQuantity(e.target.value)}/>
    </div>

    <div className=" col-md-4 inlineInputs">
      <label>Price</label>
      <input
       type="number"
       className="inputAddPro"
       min="0"
       onChange={(e)=>setPrice(e.target.value)} 
      />
     
    </div>

  </div>

<div className="form-group mb-5">
    <label htmlFor="Description">
     Description
      </label>

    <textarea 
    className="inputAddPro" 
    aria-describedby="description" 
    rows={5}
    cols={6}
    onChange={(e)=>setDescription(e.target.value)}
    />
</div>
</div>

 <div className="vl"></div>

<div className="addrightside">

        <label >Product Images</label>
      <div className="form-group mb-5 imginput">

        <div className="drag-area" id="img1">
          <div className="iconimg">
            <BsImages></BsImages>
          </div>
          <span className="header" id="header1">Drop your images here, or</span>
          <span className="header" id="header1">select <span className="button" >click to browse</span></span>
          <input className="browse" type="file" hidden/>
        </div>

        <div className="drag-area" id="img2">
          <div className="iconimg">
            <BsImages></BsImages>
          </div>
          <span className="header" id="header2">Drop your images here, or</span>
          <span className="header" id="header2">select <span className="button" id="button2">click to browse</span></span>
          <input className="browse" id="browse2" type="file" hidden/>
        </div>

        <div className="drag-areaSupq" >
        <div className="drag-areaSup" id="img3">
          <div className="iconimg">
            <BsImages></BsImages>
          </div>
          <span className="header" id="header3">Drop your images here, or</span>
          <span className="header" id="header3">select <span className="button" id="button3">click to browse</span></span>
          <input className="browse" id="browse3" type="file" hidden/>
        </div>

        <div className="drag-areaSup" id="img4">
          <div className="iconimg">
            <BsImages></BsImages>
          </div>
          <span className="header" id="header4">Drop your images here, or</span>
          <span className="header" id="header4">select <span className="button" id="button4">click to browse</span></span>
          <input className="browse" id="browse4" type="file" hidden/>
        </div>
        </div>

      </div>

  <div className="loc">
    <div className="form-group mb-5">
      <label>Location</label>
      
      <input 
      type="text" 
      className="inputAddPro location" 
      id="Address" 
      aria-describedby="Address" 
      onChange={(e)=>setAddress(e.target.value)}
      />
    </div>
            <TbCurrentLocation className=" locationIcon"></TbCurrentLocation>
    </div>
    
        <button type="submit" className="btnAdd">Upload Product</button>
</div>
</div>
</form>

   </div>
</body>
</>
    );
}
export default AddProduct; 