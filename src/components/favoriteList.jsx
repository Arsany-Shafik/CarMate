import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Favoritemap from "./favoritemap";

function FavoriteList() {
  let token="";
  let userId='';
  let location = useLocation();
  if(location.state!=null){
  token=location.state.data.props.token;
  userId=location.state.data.props.userId;

  }
  console.log(location);
  console.log(token);


    return(
        <>
  <body className="bgmarket">
    <div>
    <Navbar token={token} userId={userId}/>
    </div>
    <div className="cont">
    <h2 className="Marketheader p-0">Your Wishlist </h2>
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
    </ul>
          {/* ////////////////////////// */}
        <Favoritemap token={token} userId={userId}/>
        </div>
        </body>
        </>
    )
}
export default FavoriteList;