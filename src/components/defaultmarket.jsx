import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import ProdcutList2 from "./productList2";
import {HiBarsArrowDown} from 'react-icons/hi2'

function Defaultmarket(props){

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
      <li className="nav-item marketheadnav33" role="presentation">
        <a className="marketheadna4" href="/market"><HiBarsArrowDown className="iconFilter"/></a>
      </li>
    </ul>
    <ProdcutList2 token={props} />
        
    </div>
        </body>
        </>
    );
};
export default Defaultmarket;