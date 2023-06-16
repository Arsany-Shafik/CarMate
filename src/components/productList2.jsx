import { useEffect, useState } from "react";
import Product2 from "./product2";
import { Link } from "react-router-dom";

function ProdcutList2(props){
    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
    const [prodcuts,setProducts]=useState([]);
    useEffect(() =>{
      fetch(apiurl)
      .then((res) =>res.json())
      .then((data)=>setProducts(data))
    },[]);
    

    return(
        <> 

<div id="cards" className="row row-cols-1 col-lg-8 row-cols-md-3 g-5 m-5 cards ">
    {prodcuts.product?.map((prodcut) =>{
        return(
            <div className="col cardp" key={prodcut._id}  >
                <Link to={`/product/${prodcut._id}`}  className="noink" >
                 <Product2 prodcut={prodcut} token={props}/>
                 </Link>
            </div>
        )
    })}

  </div>
</>
    );
}
export default ProdcutList2;