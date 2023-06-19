import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import { NavLink} from "react-router-dom";
import Navbar from "./navbar";
import ProdcutList2 from "./productList2";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {GiSpeedometer} from 'react-icons/gi'
import {GiAutomaticSas} from 'react-icons/gi'
import {GiCarSeat} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'
import { Rating } from "@mui/material";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
//////////////////////////
function ProductDetails(){
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
console.log(product);
////////////USER REVIEW////////////////////
const [rat,setRat]=useState([]);
useEffect(() =>{
  const loadData =async () => {
  fetch(`${apiurl}/${params.productId}`)
  .then((res) =>res.json())
  .then((product)=>{setProduct(product.data);setRat(product.data.Ratings)})
};
loadData();
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
  if (click.style.display==="block"){
    click.style.display="none";
  }else{
    click.style.display="block"
  }}
   return(
 <>
    <body className="bgmarket">
    <div>
      <Navbar />
    </div>
    <div className="cont">
      <h2 className="Marketheader p-0">Find your perfect item </h2>
    <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
      <NavLink to="/market">
        <button className="marketheadnav4 bg-primary" id='item'  >  All items</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlycars" >
        <button className="marketheadnav4" id='car'  >Cars</button>
    </NavLink>
      </li>
      <li className="nav-item " role="presentation">
      <NavLink to="/onlyaccessories" >
        <button className="marketheadnav4" id='access' >Accessories</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlyparts" >
        <button className="marketheadnav4" id='parts'  >Car parts</button>
    </NavLink>
      </li>
            <li className="nav-item" role="presentation">
        <div className='dropdown'>
       <button onClick={show_hide} className="nav-item marketheadnav33 "><HiBarsArrowDown className="iconFilter"/></button>
          <center>
            <div id='list-items'>
              <a  href='*'>Price: High to Low</a>
              <a  href='*'>Price: Low to High</a>
              <a  href='*'>Rating: High to Low</a>
            </div>
          </center>
            </div>
      </li>
    </ul>
       <ProdcutList2 />
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
               {showMore ? text : `${text.substring(0, 50)}`}
              <small className=" seemore"  onClick={() => setShowMore(!showMore)}>
              {showMore ? " (Show less)" : "...Show more"}
              </small>
             </p>
           </div>
           <div className="part3">
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
          <div className="part4 footerI">
           <h5 className="price">$ {product.Price}</h5>
           <button type="submit" className="buy">Buy now</button>
          </div>
        </form>
        </div>
        </body>
        </>
   
    )
}
export default ProductDetails;