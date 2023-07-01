import { Rating } from "@mui/material";
import {  MdOutlineFavorite } from "react-icons/md";
import axios from "axios";
function Productfav(props){
  const {prodcut}=props;
  console.log(props);

function favorite(){

axios.patch(`https://car-mate-t012.onrender.com/api/v1/users/Favourite/${prodcut._id}`,{},{ headers: {
  'Content-Type': 'application/json',
  'authorization': 'Bearer ' + props.tokenandId.token
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
     else if(error.response.status === 401) {
      console.log(error.response.headers)
    
     } else if (error.request) {
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
<div  className="card">
      <img src={prodcut.imageCover} className="card-img-top imagecover" alt={prodcut.Type} />
      
      < a onClick={favorite} style={{position:'absolute',fontSize:'2vw',left:'90%', color:'blue' }} ><MdOutlineFavorite  /></a>
      <div className="card-body d-flex flex-column align-items-center text-center pb-0" >
        <h5 className="card-title namemarket">{prodcut.Name}</h5>
        <h5 className="card-title text-white namemarket">$ {prodcut.Price}</h5>
        <Rating className="pt-2 rating" name="read-only" value={prodcut.RatingsAverage} precision={0.1} size="small" readOnly />
      </div>

      <div className="card-footer">
        <small className="text-white foter">
          <small className="float-end text-white foter mt-1">Quantity: {prodcut.Quantity}</small>
          <img src="/Condition.png" className="mb-1" alt="Condition" />
          {prodcut.Condition}
          </small>
      </div>
    </div> 


    );
}
export default Productfav;