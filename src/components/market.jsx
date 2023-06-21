import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import ProdcutList from "./productList";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {BsSearch} from 'react-icons/bs'
// import Dropdown from "./Dropdown";


function Market(props){
  let token="";
  let userId="";
  let location = useLocation();
  if(location?.state?.token != null){
  token=location.state.token.tokrnn;
  userId=location.state.userId.userId;
  }
  if(location?.state?.data?.props != null){
    token=location.state.data.props.token;
    userId=location.state.data.props.userId;
  }
  console.log(location);
  console.log(userId);

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
    <Navbar token={token} userId={userId}/>
    </div>
    <div className="cont">
      <h2 className="Marketheader p-0">Find your perfect item 
        <div className="Marketheader2">
            <div className="d-flex justify-content-center p-3 h-100">
                <div className="searchbar">
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
        <button className="marketheadnav2 bg-primary" id='item'  >  All items</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlycars" >
        <button className="marketheadnav2" id='car'  >Cars</button>
    </NavLink>
      </li>
      <li className="nav-item " role="presentation">
      <NavLink to="/onlyaccessories" >
        <button className="marketheadnav2" id='access' >Accessories</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlyparts" >
        <button className="marketheadnav2" id='parts'  >Car parts</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
        {/* <a className="marketheadna4" href="*"><HiBarsArrowDown className="iconFilter"/></a> */}
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
          {/* ////////////////////////// */}
          

          {/* ////////////////////////// */}
    <ProdcutList token={token} userId={userId}/>
        
        </div>
        </body>
        </>
    );
  }
export default Market;