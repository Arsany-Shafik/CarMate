const imageUrl = "https://car-mate-t012.onrender.com/public/img/Products/";


function Carinfo(props){
    const {prodcut}=props;

return( 
    <>
    <body className="bgmarket">
    <img src={imageUrl.concat(prodcut.imageCover)} className="card-img-top" alt={prodcut.Type}/>
      <div className="card-body d-flex flex-column align-items-center text-center">
        <h5 className="card-title namemarket">{prodcut.Name}</h5>
        <h5 className="card-title text-white namemarket">$ {prodcut.Price}</h5>
      </div>
       <div className="cont p-3">
       </div>

    </body>
    </>
);

}
export default Carinfo;