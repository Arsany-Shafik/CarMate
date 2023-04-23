function Navbar(){

    return(

        <div className="nav nav-pills flex-column flex-sm-column pt-5 navigation">
  <a className="flex-md nav-link nav-link mb-5" href="/market">
    <img src="market2.png" className="imgsmarket1" alt="Market icon" />
  </a>
  <a className="flex-md nav-link nav-link mb-5" href="/market" >
    <img src="profile.png" className="imgsmarket2" alt="Profile icon" />
  </a>
  <a className="flex-md nav-link nav-link mb-5" href="/market">
    <img src="car.png" className="imgsmarket3" alt="Car icon" />
  </a>
  <a className="flex-md nav-link nav-link mb-5" href="/addproduct">
    <img src="Upload.png" className="imgsmarket4" alt="Upload icon" />
  </a>
  <a className="flex-lg-fill nav-link nav-link mt-5" href="/">
    <img src="Exit.png" className="imgsmarket5" alt="Vector icon" />
  </a>
</div>


    );
}
export default Navbar;