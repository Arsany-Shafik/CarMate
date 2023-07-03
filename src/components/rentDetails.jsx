import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import React from 'react';
import Navbar from "./navbar";
// import ProdcutList2 from "./productList2";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {GiSpeedometer} from 'react-icons/gi'
import {GiAutomaticSas} from 'react-icons/gi'
import {GiCarSeat} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'
import { Rating } from "@mui/material";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";
import axios from "axios";
import Product2Rent from "./product2Rent";


//////////////////////////
function RentDetails(props){
  let token="";
  let userId="";
  let location = useLocation();
  if(location?.state?.token != null){
  token=location.state.token.tokrnn;
  userId=location.state.userId.userId;
  }if(location?.state?.data != null){
    token=location.state.data.token;
    userId=location.state.data.userId;
    }
  if(location?.state?.data?.token?.token != null){
    token=location.state.data.token.token;
    userId=location.state.data.userId.userId;
    }

  if(location?.state?.data?.props != null){
    token=location.state.data.props.token;
    userId=location.state.data.props.userId;
  }
  console.log(location);
  console.log(userId);



    const apiurl='https://car-mate-t012.onrender.com/api/v1/rents';
    const params=useParams();
    const [product,setProduct]=useState([]);
  /////////////PRODUCT IMG////////////////
    const [img,setImg]=useState([]);
    useEffect(()=>{
        const loadData =async () => {
         fetch(`${apiurl}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>{setProduct(product.data);setImg(product.data.Images)})
        };
        loadData();
    },[params]);

////////////USER REVIEW////////////////////
const [rat,setRat]=useState([]);
useEffect(() =>{
  const loadData2 =async () => {
  fetch(`${apiurl}/${params.productId}`)
  .then((res) =>res.json())
  .then((product)=>{setRat(product.data.Ratings)})
};
loadData2();
},[params]);
///////////PRODUCT DESCR//////////////////
const [showMore, setShowMore] = useState(false);
const text =`${product.Description}`;
//////////SLIDSHOW///////////////////
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '33vh',
  ObjectFit: 'cover',
  ObjectPosition:' 20% 15%'
}
///////////////////////////
function show_hide(){
  var click =document.getElementById("list-items");
  var click2 =document.getElementById("rotate");
  if (click.style.display==="block"){
    click.style.display="none";
    click2.style.transform= "rotatex(0deg)";
  }else{
    click.style.display="block"
    click2.style.transform= "rotatex(180deg)";
  }}
  ////////////SORT//////////////
// const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
const [tempList,setTempList]=useState([]);
useEffect(() =>{
  fetchData()
},[]);
const fetchData= ()=>{
  axios.get('https://car-mate-t012.onrender.com/api/v1/rents').then((res)=>{
    setTempList(res.data.rent);
    console.log(res);
})
}
const ascendingEvent=()=>{
    let data=[...tempList]
    if(data.length > 0){
       let result= data.sort((a,b)=> a.Price - b.Price)
       setTempList(result)
    }}
const descendingEvent=()=>{
    let data=[...tempList]
    if(data.length > 0){
       let result= data.sort((a,b)=> b.Price - a.Price)
       setTempList(result)
    }
}
const descendingRating=()=>{
    let data=[...tempList]
    if(data.length > 0){
       let result= data.sort((a,b)=> b.RatingsAverage - a.RatingsAverage)
       setTempList(result)
    }
}

////////////BUY PRODUCT////////////////
const buyProduct =(e)=>{
  e.preventDefault();
  let data={
    success_url:"https://car-mate-bz2u.onrender.com",
    cancel_url:"https://car-mate-bz2u.onrender.com",
    id: product._id,
    Quantity : 1
  }
  axios.post(`https://car-mate-t012.onrender.com/api/v1/rents/rent`,data,{ headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + token
  }}).then((response)=>{
  console.log(response.data);
  window.location.replace(response.data.url);
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
      <Navbar token={token} userId={userId} />
    </div>
    <div className="cont">
      <h2 className="Marketheader p-0">Rent </h2>
    <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation" style={{position:'absolute',left:'65%'}}>
        <div className='dropdown'>
       <button onClick={show_hide} id="rotate" className="nav-item marketheadnav33 "><HiBarsArrowDown className="iconFilter"/></button>
          <center>
          <div id='list-items'>
              <button onClick={descendingEvent}>Price: High to Low</button>
              <button onClick={ascendingEvent}>Price: Low to High</button>
              <button onClick={descendingRating}>Rating: High to Low</button>
            </div>
          </center>
            </div>
      </li>
    </ul>
      {/* ////////////////////////// */}
        <div id="cards" className="row row-cols-1 col-lg-8 row-cols-md-3 g-5 m-5 cards ">

        {tempList && tempList.length > 0 && tempList !== undefined ? tempList.map((item) =>{
          return(
             <div className="col cardp" key={item._id}  >
                 <Link replace state={{ data: {token:token, userId:userId} }} to={`/rents/${item._id}`}  className="noink" >
                  <Product2Rent prodcut={item} token={token} userId={userId}/>
               </Link>
             </div>
          )
          }) : "NO DATA"
          }
        </div>
     {/* ////////////////////////// */}
       {/* <ProdcutList2/> */}
    </div>

        {/* ///////////////////////////////////////////////////////////// */}
        <div className="prodid" >
          <form action=""> 
        <div className="part1" style={{background:'rgba(4, 72, 205, 1)'}}>
            <h1> Product Details <h3 className="nameproduct"> {product.Name}</h3></h1>
          <div >
        {img.length > 0 ?
              <Slide>
                {img?.map((slideImage, index)=> (
                  <div key={index}>
                    <div className="im" style={{ ...divStyle, 'backgroundImage': `url(${slideImage})`}}>
                    </div>
                  </div>
                ))} 
                </Slide>: null}
                </div>

           <div className="nos">
              <div className="no1"><GiCarSeat className="iconI"/><p className=" text-white icontext ">4 Seats</p></div>
              <div className="no2"><GiAutomaticSas className="iconI"/><p className=" text-white icontext ">Automatic</p></div>
              <div className="no3"><GiSpeedometer className="iconI2"/><p className=" text-white icontext ">0-100 Kph<br/>32 s</p></div>
           </div>
           </div>
           <div className="part2" style={{background:'rgba(4, 72, 205, 1)'}}>
             <h5>About</h5>
             <p>{product.Description}</p>
           </div>
           <div className="part3" style={{background:'rgba(4, 72, 205, 1)'}}>
             <h5>Reviews</h5>
             {rat?.map((product) =>{
        return(
            <div>
              <h5 className="rev1"><BsPerson className="revicon"/> <h6>{product.user}</h6></h5>
             <p>{product.Description}<br/>
             <Rating className="pt-1 rating" name="read-only" value={product.Rating} precision={0.1} size="small" readOnly />
             </p>
             <hr/>
            </div>
        )
    })}
           </div>
          <div className="part4 footerI" style={{background:'rgba(4, 72, 205, 1)'}}>
           <h5 className="price">$ {product.Price} / day</h5>
           <button type="submit" className="buy" style={{background:'rgba(20, 20, 20, 1)'}} onClick={buyProduct}>Rent now</button>
          </div>
        </form>
        </div>
        </body>
        </>
   
    )
}
export default RentDetails;