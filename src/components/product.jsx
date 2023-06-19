import { Rating } from "@mui/material";
function Product(props){
  const {prodcut}=props;
  console.log(props)

    return(
<div  className="card">
      <img src={prodcut.imageCover} className="card-img-top imagecover" alt={prodcut.Type} />
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
export default Product;