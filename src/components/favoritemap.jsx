import { Link } from "react-bootstrap/lib/navbar";
import Product from "./product";

function Favoritemap(){
    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
    const [prodcuts,setProducts]=useState([]);
    useEffect(() =>{
      fetch(apiurl)
      .then((res) =>res.json())
      .then((data)=>setProducts(data))
    },[]);
    console.log(prodcuts);
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