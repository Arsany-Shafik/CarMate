import { Rating } from "@mui/material";
function ProductRent(props){
  const {prodcut}=props;
  console.log(props);



    return(
<div  className="card">
      <img src={prodcut.imageCover} className="card-img-top imagecover" alt={prodcut.Type} />
      
      <div className="card-body d-flex flex-column align-items-center text-center pb-0" >
        <h5 className="card-title namemarket">{prodcut.Name}</h5>
        <h5 className="card-title text-white namemarket">$ {prodcut.Price} / day</h5>
        <Rating sx={{'& .MuiRating-iconFilled':{color:'blue'}, '& .MuiRating-iconEmpty':{color:'blue'}}}
         className="pt-2 rating" name="read-only" value={prodcut.RatingsAverage} precision={0.1} size="small" readOnly />
      </div>
    </div> 


    );
}
export default ProductRent;