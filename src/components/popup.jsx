import Navbar from "./navbar";

function Popup(){

let popup=document.getElementById("popup");
function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}

    return( 
<>
<body className="bgmarket">
   <div>
     <Navbar />
   </div>
   <div className="container">
    <button type="submit" className="btn1" onClick={openpopup}> submit</button>
    <div className="popup" id="popup">
    <img src="tick.png" alt="verifay"/>
   <h1>successful !</h1>
   <p>Your Password has been changed successfully ^_^</p>
   <button type="button"  onClick={closepopup}>ok</button>
    </div>
   </div>
</body>
</>
    );
}
export default Popup; 

// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

// export default function PopupGfg() {
// 	return (
// 		<div>
// 			<h4>Popup - GeeksforGeeks</h4>
// 			<Popup trigger=
// 				{<button> Click to open modal </button>}
// 				modal nested>
// 				{
// 					close => (
// 						<div className='container2'>
// 							<div className='content'>
// 								Welcome to GFG!!!
// 							</div>
// 							<div>
// 								<button onClick=
// 									{() => close()}>
// 										Close modal
// 								</button>
// 							</div>
// 						</div>
// 					)
// 				}
// 			</Popup>
// 		</div>
// 	)
// };
