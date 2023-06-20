import { useNavigate, Link } from 'react-router-dom'
import  React,  { useState } from 'react';
import axios from 'axios';
import Market from './market'
import App from '../App'


function Login(){
  const [style, setStyle] = useState("left");
  const [style2, setStyle2] = useState("imgs");
  const [input,setInput] = useState({
    email: '',
    password: '',
  });
  const [error,setError] = useState({
    email: '',
    password: '',
  });
const delay = ms => new Promise(res => setTimeout(res, ms));
const navigate = useNavigate();
async function Anima (){
  setStyle("left2");
  setStyle2("imgs2");
  await delay(2900);
    navigate("/sign-up")
 }
///////////////////////////////////
const onInputChange = e => {
  const { name, value } = e.target;
  setInput(prev => ({
    ...prev,
    [name]: value
  }));
  validateInput(e);
}

const validateInput = e => {
  let {value, name} = e.target;
  setError(prev => {
    const stateObj = { ...prev, [name]: "" };
    switch (name) {
    
      case "email":
        if (!value) {
          stateObj[name] = "Please enter Email.";
        }
        break;

      case "password":
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
///////////////////////////////////////
     const [mesg, setmesg] = useState('');

  const handleSubmit2 =  async e => {
    
    e.preventDefault();
    let userData = {
      email: input.email,
      password: input.password
    };
      await axios.post("https://car-mate-t012.onrender.com/api/v1/users/login", userData).then( (response) => {
      console.log(response.status, response.data.token,response.data.userId);
      const tokrnn=response.data.token;
      const userId=response.data.userId;
      navigate('/Market',{
        state: {
            token: {tokrnn},
            userId: {userId}
        },
      });
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
      <img src='Backgroundcarsm.jpeg' className='imgbk' alt='background'></img>

      
      <div id={style}>
       
      <div className='home'>
       <form  className='formlogin'  onSubmit={handleSubmit2} >
       <marquee direction="down" behavior="slide" scrollamount="3" >
         <h3 className='text-primary title'>Log In</h3>
       </marquee>

        <div className='block'>

        <marquee direction="down" behavior="slide" scrollamount="7">
        <div className="mb-1">
          <label className='lab'>Email Address</label>
          <input
            type="email"
            className="form-control m-auto"
            placeholder="Enter email"
            name="email"
            autoComplete='current-email'
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
        </div>
        </marquee>

        <marquee direction="down" behavior="slide" scrollamount="5">
        <div className="mb-1">
          <label className='lab'>Password</label>
          <input
            type="password"
            className="form-control m-auto"
            placeholder="Enter password"
            name="password"
            autoComplete='current-password'
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
        </div>
        </marquee>
        <h6 className='mesg'>{mesg}</h6>

        </div>
        <marquee direction="down" behavior="slide" scrollamount="5" >
        <div className="mb-1">
          <div className="custom-control custom-checkbox lab">
            <input
              type="checkbox"
              className="checkbox custom-control-input rmei"
              id="customCheck1"
              
            />
            <label className="custom-control-label rme" htmlFor="customCheck1">
              Remember me
            </label>

           <div className='forgdiv'>
           <p ><Link to="/forgot" className="forget">Forget your password?</Link>
           </p>
           </div>
          </div>
        </div>
        </marquee>

        <marquee direction="up" behavior="slide">
        <div>
          <button type="submit" className='btnlog' id='button'>
            <span> Log in </span> 
          </button>
        </div>
        </marquee>

 
        <marquee direction="left" behavior="slide" scrollamount="35">
        <div className="but1">
          <p >Need an account? <Link onClick={Anima} className="aa">Sign up</Link>
           </p>
        </div>
        </marquee>
       </form>
      </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center" id={style2}>
        <div className="carbg2">
          <div className="car">
           <img  className="pic2h" src="/carblue2.png" alt='car'/>
          </div>
        </div>
      </div>
    </div>
      
      
    )
    }
export default Login



