import { Link,  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Productfav from "./productfav";

function Favoritemap(props){
  const navigate = useNavigate();
  let token='';
  let userId='';
  if (props.userId!==undefined){
    token=props.token;
  userId=props.userId;
  }
  if (props?.userId?.userId!=null){
    token=props.token.tokrnn;
  userId=props.userId.userId;
  }
  
console.log(userId);
    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
    const [prodcuts,setProducts]=useState([]);
    const [favorite,setFavorite]=useState('');
    const [arraypro]=useState([]);




    useEffect(() =>{

      axios.get(`https://car-mate-t012.onrender.com/api/v1/users/profile`,{ headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      }})  .then( (response) => {
        console.log(response.status,response.data);
        setFavorite(response.data.message.Favorites);
       
      }).catch(function (error) {
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
          alert('You are not logged in please log in first.');
          navigate('/Market',{
            state: {
                token: {token},
                userId: {userId}
            },
          });
        }
    });
      fetch(apiurl)
      .then((res) =>res.json())
      .then((data)=>setProducts(data))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(prodcuts.product);
    console.log(props);
    console.log(favorite);


    return(
        <> 

    <div id="cards" className="row row-cols-1 col-lg row-cols-md-3 g-5 m-5 cards ">


        {Array.isArray(favorite)?favorite.map((prodcut,i)=> {
          return(
            <div className="col cardp" key={i}  >
          <Link replace state={{ data: {token:token, userId:userId} }} to={`/product/${prodcut._id}`}  className="noink" >
           <Productfav prodcut={prodcut} token={token} userId={userId} tokenandId={props}/>
           </Link>
      </div>
  )
}):null}

</div>
</>   
 )}
export default Favoritemap;