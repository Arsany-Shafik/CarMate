const imageUrl = "https://car-mate-t012.onrender.com/public/img/Products/";
function Product(props){
  const {prodcut}=props;



    return(
<div className="card">
      <img src={imageUrl.concat(prodcut.imageCover)} className="card-img-top" alt={prodcut.Type}/>
      <div className="card-body d-flex flex-column align-items-center text-center">
        <h5 className="card-title namemarket">{prodcut.Name}</h5>
        <h5 className="card-title text-white namemarket">$ {prodcut.Price}</h5>

      </div>
      <div className="card-footer">
        <small className="text-white foter">
          <small className="float-end text-white foter mt-1">Quantity: {prodcut.Quantity}</small>
          <img src="Condition.png" className="mb-1" alt="Condition" />
          {prodcut.Condition}
          </small>
      </div>
    </div>


    );
}
export default Product;