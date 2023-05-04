import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Market from "./market";
function ProductDetails(){
    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
    const params=useParams();
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        const loadData =async () => {

        await fetch(`${apiurl}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product.data))
        };
        loadData();
    },[]);

console.log(product);

    return(
     
        
        <>
        <body className="bgmarket">
        <Market/>
        
        <div className="prodid">
            <h1> Product Details - {product.Name} </h1>
            </div>
            </body>
        </>
        
        
    )
}
export default ProductDetails;