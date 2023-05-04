import { useEffect, useState } from "react";
import Product from "./product";
import { Link } from "react-router-dom";
function ProdcutList(){
    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
    const [products,setProducts]=useState([]);
    useEffect(() =>{
      fetch(apiurl)
      .then((res) =>res.json())
      .then((prodcuts)=>setProducts(prodcuts))
    },[]);
    console.log(products.product);

    return(
        <>

<div id="cards" className="row row-cols-1 col-md row-cols-md-3 g-5 m-5 cards">
    {products.product?.map((prodcut) =>{
        return(
           
            <div className="col cardp" key={prodcut._id}>
                 <Link to={`/product/${prodcut._id}`} reloadDocument className="noink" >
                <Product prodcut={prodcut} />
                </Link>
            </div>
            
        )
    })}
 
  </div>
</>
    );
}
export default ProdcutList;