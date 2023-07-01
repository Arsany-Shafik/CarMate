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
      axios.get(`https://car-mate-t012.onrender.com/api/v1/users/${userId}`).then( (response) => {
        console.log(response.status,response.data.data.user.Favorites);
        setFavorite(response.data.data.user.Favorites);
       
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
          navigate('/Market');
        }
    });
      fetch(apiurl)
      .then((res) =>res.json())
      .then((data)=>setProducts(data))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(prodcuts.product);
    console.log(props);
    console.log(arraypro);


    return(
        <> 
            {Array.from(favorite).map(element2=>{
      axios.get(`https://car-mate-t012.onrender.com/api/v1/prodcuts/${element2}`).then( (response) => {
        arraypro.push(response.data.data);
})
   })}
    <div id="cards" className="row row-cols-1 col-lg row-cols-md-3 g-5 m-5 cards ">


        {arraypro?.map((prodcut)=> {
          return(
            <div className="col cardp" key={prodcut._id}  >
          <Link to={`/product/${prodcut._id}`}  className="noink" >
           <Productfav prodcut={prodcut} tokenandId={props}/>
           </Link>
      </div>
  )
})}

</div>
</>   
 )}
export default Favoritemap;