import  {Link}  from 'react-router-dom'
function Navbar(){

    return(

        <div className="nav nav-pills flex-column flex-sm-column pt-5 navigation">
  <Link className="flex-md nav-link nav-link mb-5"  to="/market" >
    <img src="/market2.png" className="imgsmarket1" alt="Market icon" />
    </Link>
  <Link className="flex-md nav-link nav-link mb-5"  to="/market" >
    <img src="/profile.png" className="imgsmarket2" alt="Profile icon" />
    </Link>
  <Link className="flex-md nav-link nav-link mb-5"  to="/market" >
    <img src="/car.png" className="imgsmarket3" alt="Car icon" />
    </Link>
  <Link className="flex-md nav-link nav-link mb-5"  to="/addproduct" >
    <img src="/Upload.png" className="imgsmarket4" alt="Upload icon" />
  </Link>

  <Link className="flex-lg-fill nav-link nav-link mt-5" to="/" >
    <img src="/Exit.png" className="imgsmarket5" alt="Vector icon" />
  </Link>
</div>


    );
}
export default Navbar;