// import  {Link}  from 'react-router-dom'
import { NavLink } from "react-router-dom";
import {BsShop} from 'react-icons/bs'
import {RxExit} from 'react-icons/rx'
import {FiUpload} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import {MdOutlineCarRental} from 'react-icons/md'
import {MdFavoriteBorder} from 'react-icons/md'


function NavbarA(props){
  const activeLink = "";
  const normalLink = "text-white-50";

    return(
  <div className="nav nav-pills flex-column flex-sm-column pt-4 navigation">
   <div className="grid-container">
    <NavLink state={{ data: {props} }} to="/onlyaccessories" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
      <BsShop className=" icon iconmarket" title="Market" />
    </NavLink>

     

    <NavLink state={{ data: {props} }} to="/profile" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
         <BsPerson className="icon iconprofile" title="Profile"/>
    </NavLink>

      

    <NavLink state={{ data: {props} }} to="/rent" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <MdOutlineCarRental  className="icon iconcar" title="Rent"/> 
    </NavLink>

      

    <NavLink state={{ data: {props} }} to="/addproduct" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <FiUpload className="icon iconupload" title="App Product"/>
    </NavLink>


    <NavLink state={{ data: {props} }} to="/favoriteList" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <MdFavoriteBorder  className="icon iconfavorite" title="Favorite List"/>
    </NavLink>
      

    <NavLink  to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}  id="exit">
        <RxExit  className="iconexit" title="Exit"/>
    </NavLink>

      
   </div>
  </div>

    );
}
export default NavbarA;