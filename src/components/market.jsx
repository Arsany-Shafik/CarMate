import Navbar from "./navbar";
import ProdcutList from "./productList";
function Market(){

    return(
      <>
      <body className="bgmarket">
        <div>
        <Navbar />
        </div>
        <div>
          <h2 className="Marketheader p-0">Find your perfect item</h2>
          <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation ">
    <button className="bg-primary marketheadnav2">All items</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="marketheadnav2" >Cars</button>
  </li>
  <li className="nav-item " role="presentation">
    <button className="marketheadnav2">Accessories</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="marketheadnav2">Car parts</button>
  </li>
  <li className="nav-item border-0" role="presentation">
    <a className="marketheadnav3" href="/market"><img src="Filter.png" alt="Filter" /></a>
  </li>
</ul>
        <ProdcutList />
        </div>
        </body>
        </>
    );
}
export default Market;