import { Link,  useNavigate } from "react-router-dom";
import Product from "./product";
import { useEffect, useState } from "react";
import axios from "axios";

function Favoritemap(props){
  const navigate = useNavigate();
  let token='';
  let userId='';
  if (props.userId!=undefined){
    token=props.token;
  userId=props.userId;
  }

    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
    const [prodcuts,setProducts]=useState([]);
    const [favorite,setFavorite]=useState('');

    useEffect(() =>{
      axios.get(`https://car-mate-t012.onrender.com/api/v1/users/${userId}`).then( (response) => {
        console.log(response.status);
        setFavorite(response.data.data.user.Favorites);
      })  .catch(function (error) {
        if (error.response) {
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
          alert(error.message);
          navigate('/Market');
        }
    });
      fetch(apiurl)
      .then((res) =>res.json())
      .then((data)=>setProducts(data))
    },[]);
    console.log(prodcuts);
    console.log(props);

    return(
        <> 

<div id="cards" className="row row-cols-1 col-lg row-cols-md-3 g-5 m-5 cards ">
    {prodcuts.product?.map((prodcut) =>{
        return(
            <div className="col cardp" key={prodcut._id}  >
                <Link to={`/product/${prodcut._id}`}  className="noink" >
                 <Product prodcut={prodcut} tokenandId={props}/>
                 </Link>
            </div>
        )
    })}

  </div>
</>    )
}
export default Favoritemap;