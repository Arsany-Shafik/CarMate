import React from 'react';
import { NavLink,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./product";
import NavbarA from "./navbarA";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {BsSearch} from 'react-icons/bs'

function Onlyaccessories(){

    const apiurl2='https://car-mate-t012.onrender.com/api/v1/prodcuts?Type=Accessories';
    const [prodcuts2,setProducts2]=useState([]);
    useEffect(() =>{ 
      fetch(apiurl2)
      .then((res) =>res.json())
      .then((data)=>setProducts2(data))
    },[]);
    console.log(prodcuts2.product);

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
    <NavbarA />
    </div>
    <div className="cont">
      <h2 className="Marketheader p-0">Find your perfect item 
        <div class="Marketheader2">
            <div class="d-flex justify-content-center p-3 h-100">
                <div class="searchbar">
                    <input className="search_input" type="text" placeholder="Search..."/>
                    <a className="search_icon" href="*"><BsSearch/></a>
                </div>
            </div>
        </div>
      </h2>
   {/* ///////////////////////////////////// */}
    <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
      <NavLink to="/market">
        <button className="marketheadnav2 " id='item'>  All items</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlycars" >
        <button className="marketheadnav2 " id='car'>Cars</button>
    </NavLink>
      </li>
      <li className="nav-item " role="presentation">
      <NavLink to="/onlyaccessories" >
        <button className="marketheadnav2 bg-primary" id='access'>Accessories</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlyparts" >
        <button className="marketheadnav2" id='parts'>Car parts</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
        <div className='dropdown'>
       <button onClick={show_hide} className="nav-item marketheadnav3 "><HiBarsArrowDown className="iconFilter"/></button>
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

<div className="row row-cols-1 col-lg row-cols-md-3 g-5 m-5 cards">
    
    {prodcuts2.product?.map((prodcut) =>{
        return(
            <div className="col cardp" key={prodcut._id}>
                <Link to={`/product/${prodcut._id}`}  className="noink" >
                  <Product prodcut={prodcut} />
                </Link>
            </div>
        )
    })}
  
  </div>
  </div>
        </body>
</>
    );
}
export default Onlyaccessories;