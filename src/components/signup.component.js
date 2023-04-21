import { useNavigate, Link } from 'react-router-dom'
import  React,{ useState } from 'react';
// import Marquee from "react-fast-marquee";
import axios from 'axios';
function SignUp() {
  const [style, setStyle] = useState("right");
  const [style2, setStyle2] = useState("left");
  const [input, setInput] = useState({
    usernamef: '',
    usernamel:'',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    usernamef: '',
    usernamel:'',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const navigate = useNavigate();

 async function Anima (){
  setStyle("right2");
    setStyle2("left2");
  await delay(2900);
    navigate("/")
 }

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        
        case "usernamef":
          if (!value) {
            stateObj[name] = "Please enter FirstName.";
          }
          break;
        case "usernamel":
          if (!value) {
            stateObj[name] = "Please enter LastName.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
  const [mesg, setmesg] = useState('');

  const handleSubmit =  async e => {
    
    e.preventDefault();
    let userData = {
      FirstName:input.usernamef,
      LastName:input.usernamel,
      PhoneNumber:input.PhoneNumber,
      email: input.email,
      password: input.password,
      ConfirmPassword:input.confirmPassword
    };
      await axios.post("https://car-mate-t012.onrender.com/api/v1/users/signup/", userData).then( (response) => {
      console.log(response.status, response.data.token);

      navigate('/Market');
    })
    
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Error: ', error.response.data.message);
        setmesg(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser 
        // and an instance of http.ClientRequest in node.js
        console.log(error.request);
        console.log('Error: ', error.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error: ', error.message);
      }
    });
  };



    
    return (
      
      <div className="App" id='parent'>
      <img src='Backgroundcarsm.jpeg' className='imgbk'></img>
        
        <div className="" id={style2}>

          <div className="carbg">
              <img id="pic1" src="/Blue.png" alt='icon'/>
          </div>

          <div className="car">
               <img  className="pic2" src="/carblue.png" alt='car'/>
          </div>
            
        </div>

      
      
        <div className=" row d-flex justify-content-center align-items-center" id={style}>
      <div className='home2'>
      <form className='upform'  onSubmit={handleSubmit}>
      <marquee direction="down" behavior="slide" scrollamount="3">
      <h3 className='text-primary title'>Create Account</h3>
       </marquee>
      
       <marquee direction="down" behavior="slide" scrollamount="6">
        <div className="mb-1">
          <label className='lab'>First Name</label>
          <input
            type="text"
            className="form-control m-auto"
            placeholder="Enter your F_name"
            name="usernamef"
            value={input.usernamef}
          onChange={onInputChange}
          onBlur={validateInput}
            required
          />
           {error.usernamef && <span className='err'>{error.usernamef}</span>}
        </div>
        </marquee>

        <marquee direction="down" behavior="slide" scrollamount="5.5">
        <div className="mb-1">
          <label className='lab'>Last Name</label>
          <input
            type="text"
            className="form-control m-auto"
            placeholder="Enter your L_name"
            name="usernamel"
            value={input.usernamel}
          onChange={onInputChange}
          onBlur={validateInput}
            required
          />
           {error.usernamel && <span className='err'>{error.usernamel}</span>}
        </div>
        </marquee>

        <marquee direction="down" behavior="slide" scrollamount="5">
        <div className="mb-1 ">
          <label className='lab'>Email Address</label>
          <input
            type="email"
            className="form-control m-auto"
            placeholder="Enter your email"
            name="email"
            value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}
            required
          />
             {error.email && <span className='err'>{error.email}</span>}
        </div>
        </marquee>

        <marquee direction="down" behavior="slide" scrollamount="4.5">
        <div className="mb-1 ">
          <label className='lab'>Phone Number</label>
          <input
           id="phone"
           type="tel" 
           className="form-control m-auto"
           placeholder="Enter your number"
           name="PhoneNumber"
           value={input.PhoneNumber}
           onChange={onInputChange}
           onBlur={validateInput}
           required
          pattern="[0-9,+]{13}"
          />
        </div>
        
        </marquee>
        <marquee direction="down" behavior="slide" scrollamount="4">
        <div className="mb-1 ">
          <label className='lab'>Password</label>
          <input
            type="password"
            id="password"
            className="form-control m-auto"
            placeholder="Enter password"
            name="password"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
            {error.password && <span className='err'>{error.password}</span>}
        </div>
        </marquee>
        <marquee direction="down" behavior="slide" scrollamount="3.5">
        <div className="mb-1 ">
          <label className='lab'>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control m-auto"
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
          {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
        </div>
        </marquee>
        <h6 className='mesg'>{mesg}</h6>
        <div className="but">
        <marquee direction="up" behavior="slide">
          <button type="submit" className="btnlog" id='button' >
           <span> Sign Up</span>
          </button>
          </marquee>
          <marquee direction="left" behavior="slide" scrollamount="35">
          <p className="forgot-password  but1">
          Already registered <Link onClick={Anima} className='aa'>Log in</Link>
        </p>
        </marquee>
     
        </div>

      </form>
      </div>
      </div>
      </div>

    )
    }

export default SignUp;