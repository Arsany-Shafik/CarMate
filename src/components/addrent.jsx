import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {BsImages} from 'react-icons/bs'
import {TbCurrentLocation} from 'react-icons/tb'

function AddRent(){
  const navigate = useNavigate();

  let location = useLocation();
  let token='';
  let userId='';
  if(location?.state?.data?.props != null){
    token=location.state.data.props.token;
    userId=location.state.data.props.userId;
  }
  else if(location?.state?.data != null){
    token=location.state.data.token;
    userId=location.state.data.userId;
  }
  console.log(token);
  let tokrnn=token;


  const [imgCover,setImgCover]=useState();
  const [img1,setImg1]=useState();
  const [img2,setImg2]=useState();
  const [img3,setImg3]=useState();
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
    setImgCover(fileURL);
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
    setImg1(fileURL);
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
    setImg2(fileURL);
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
    setImg3(fileURL);
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
const [description,setDescription] = useState("");
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
  const formSubmit =(e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('imageCover',imgCover)
    formData.append('Images',img1)
    formData.append('Images',img2)
    formData.append('Images',img3)

  let data={
    Name: name,
    Description: description,
    Price: price,
    Location: {
        type: "Point",
        Cordinates: [
          latitude,
          longitude
        ],
        Address: address
    }
}
  axios.post(`https://car-mate-t012.onrender.com/api/v1/rents/addRent`,data,{ headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + token
  } }).then((response)=>{
  console.log(response.data);
 
  axios.patch(`https://car-mate-t012.onrender.com/api/v1/rents/addImage/${response.data.message._id}`,formData,{ headers: {
    'Content-Type': 'application/form-data',
    'authorization': 'Bearer ' + token
  } }).then((response)=>{
  console.log(response.data);
  alert("Product added successfully");
  navigate('/rent',{
    state: {
        token: {tokrnn},
        userId: {userId}
    },
  });
  })
})
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Error: ', error.response.data.message);
        alert(error.response.data.message);
        navigate('/rent',{
          state: {
              token: {tokrnn},
              userId: {userId}
          },
        });
  
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
   <h2 className="Marketheader p-0">Rent Your Car</h2>
   <Link state={{ data: {token:token, userId:userId} }} to="/addproduct">
   <button className="torent">Upload Product</button>
   </Link>

   <form className="p-2 formlogin sika" onSubmit={formSubmit}>
  <div className=" bigCont">
    <div className=" smallCont">

  <div className="form-group mb-1">

    <label htmlFor="productName">
      Product Name
    </label><br/>

    <input 
    type="text" 
    className="inputAddPro inputAddPro1" 
    id="productName" 
    aria-describedby="emailHelp" 
    required
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <label >Product Images</label>
      <div className="form-group mb-1 imginput">

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


<div className="form-group mb-1">
    <label htmlFor="Description">
     Description
      </label>

    <textarea 
    className="inputAddPro inputAddPro2 " 
    aria-describedby="description" 
    rows={4}
    cols={6}
    onChange={(e)=>setDescription(e.target.value)}
    />
</div>

  <div className="loc">
  <div className="form-group mb-1">
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

</div>


<div className=" form-group mb-1">
      <label>Price</label>
      <input
       type="number"
       className="inputAddPro inputAddPro3"
       min="0"
       onChange={(e)=>setPrice(e.target.value)} 
      />
     
    </div>

        <button type="submit" className="btnAdd rnt">Upload Car</button>
</div>
</form>

   </div>
</body>
</>
    );
}
export default AddRent; 