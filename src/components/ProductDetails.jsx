import { useEffect, useState} from "react";
import { useLocation, useParams } from "react-router-dom";
import React from 'react';
import { NavLink} from "react-router-dom";
import Navbar from "./navbar";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {GiSpeedometer} from 'react-icons/gi'
import {GiAutomaticSas} from 'react-icons/gi'
import {GiCarSeat} from 'react-icons/gi'
import { Rating } from "@mui/material";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Product2 from "./product2";
import { Link } from "react-router-dom";
import axios from "axios";


//////////////////////////
function ProductDetails(props){
  const[userEdit,setUserEdit]=useState({review:""});
  const [value, setValue] = useState(1);


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

  const handleEdit=(e)=>{
    setUserEdit({userEdit, [e.target.name]:e.target.value});
  }

    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
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
  .then((res) =>res.json() ) 
  .then((product)=>{setRat(product.data.Ratings) ;console.log(product.data.Ratings);
  })
};
loadData2();
},[params]);
console.log(rat);
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
  function addreview(){
    console.log(value ,userEdit.review )
   let data={
    Rating:value ,
    Description:userEdit.review
   };
    axios.post(`https://car-mate-t012.onrender.com/api/v1/prodcuts/${product._id}`,data,{ headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + token
  } }).then((response)=>{
  console.log(response.status);
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
  ////////////SORT//////////////
// const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
const [tempList,setTempList]=useState([]);
useEffect(() =>{
  fetchData()
},[]);
const fetchData=()=>{
  fetch(apiurl)
  .then((res) =>res.json())
  .then(json=>setTempList(json.product))
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
    success_url:"https://car-mate-bz2u.onrender.com/Market",
    cancel_url:"https://car-mate-bz2u.onrender.com/Market",
    products:
    [
        {
            id: product._id,
            Quantity : 1
        }
    ]
  }
  axios.post(`https://car-mate-t012.onrender.com/api/v1/prodcuts/buy`,data,{ headers: {
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
      <h2 className="Marketheader p-0">Find your perfect item </h2>
    <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
      <NavLink replace state={{ data: {token:token, userId:userId} }} to="/market">
        <button className="marketheadnav4 bg-primary" id='item'  >  All items</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink replace state={{ data: {token:token, userId:userId} }} to="/onlycars" >
        <button className="marketheadnav4" id='car'  >Cars</button>
    </NavLink>
      </li>
      <li className="nav-item " role="presentation">
      <NavLink replace state={{ data: {token:token, userId:userId} }} to="/onlyaccessories" >
        <button className="marketheadnav4" id='access' >Accessories</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink replace state={{ data: {token:token, userId:userId} }} to="/onlyparts" >
        <button className="marketheadnav4" id='parts'  >Car parts</button>
    </NavLink>
      </li>
            <li className="nav-item" role="presentation">
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
             <div className="col cardp" key={item._id} >
                 <Link replace state={{ data: {token:token, userId:userId} }} to={`/product/${item._id}`}  className="noink" >
                  <Product2 prodcut={item} token={token} userId={userId}/>
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
        <div className="prodid">
          <form action=""> 
        <div className="part1">
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
           <div className="part2">
             <h5>About</h5>
             <p>The Condition is : {product.Condition}</p>
             <p>The quantity is avaiable : {product.Quantity}</p>
             <p>
               {showMore ? text : `${text.substring(0, 10)}`}
              <small className=" seemore"  onClick={() => setShowMore(!showMore)}>
              {showMore ? " (Show less)" : "...Show more"}
              </small>
             </p>
           </div>
           <div className="part3">
             <h5>Reviews</h5>
             {Array.isArray(rat) ? rat.map((product,i) =>{
              console.log(product);
        return(
            <div key={i}>
              <h5 className="rev1"><img src={product.user.Image} style={{width:'2vw'}} alt="user pic" className="revicon"/> <h6>{product.user.FirstName} {product.user.LastName}</h6></h5>
             <p>{product.Description}<br/>
             <Rating className="pt-1 rating" name="read-only" value={product.Rating} precision={0.1} sx={{'& .MuiRating-iconEmpty':{color:'yellow'}}} size="small" readOnly />
             </p>
             <hr/>
            </div>
        )
    }):null}
    <div>
    <Rating className="pt-1 rating" 
    sx={{'& .MuiRating-iconEmpty':{color:'yellow'}}}
    value={value}
    onChange={newValue => {
    setValue(newValue.target.defaultValue);
    console.log(newValue.target.defaultValue);
  }} 
   precision={0.5} name="simple-controlled" style={{marginLeft:'33.3%'}}/>

    <input 
         name="review"
         placeholder="Enter Your review" 
         className="input-field" 
         type="text"
         value={userEdit.review}
         onChange={(e)=>handleEdit(e)} 
         />
             <button type="button" className="buy" onClick={addreview} style={{background:'white', color:'#007AFF',fontWeight:'650'}}>Add review</button>
    </div>
           </div>
          <div className="part4 footerI">
           <h5 className="price">$ {product.Price}</h5>
           <button type="submit" className="buy" onClick={buyProduct}>Buy now</button>
          </div>
        </form>
        </div>
        </body>
        </>
   
    )
}
export default ProductDetails;