import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';


const Forget =() => {
    const [input,setInput,setError] = useState({
        email: '',
        
      });
      
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
    const navigate = useNavigate();
    const [mesg, setmesg] = useState('');

    const Submit1 =  async e => {
    
        e.preventDefault();
        let userData = {
          email: input.email
        };
          await axios.patch("https://car-mate-t012.onrender.com/api/v1/users/forgetPassword", userData).then( (response) => {
          console.log(response.status, response.data.token);
    
          navigate('/reset');
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
        
          <div className=" row d-flex justify-content-center align-items-center" id="left">
           
          <div className='home'>
      
         <form  className='formlogin'  onSubmit={Submit1} >
         <h3 className='text-primary title'>Forgot Password</h3>

        <div className='block'>

        <div className="mb-1">
          <label className='lab'>Email Address</label>
          <input
            type="email"
            className="form-control m-auto"
            placeholder="Enter email"
            name="email"
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
        </div>

        </div>
        <h6 className='mesg'>{mesg}</h6>


        <div>
         
        <br></br><button type="submit" className='btnlog1' id='button'>
            <span>Send</span> 
          </button>
         
          <p className="forgot-password  but2">
          Back to <Link to="/" className="forget">Log in</Link>
        </p>
        </div>
        
        
       </form>
      </div>
      </div>
      <div className="" id="imgs">
  
          <div className="carbg2">

            <div className="car">
                <img  className="pic2h" src="/carblue2.png" alt='car'/>
            </div>

          </div>
    
      </div>
    </div>
    );
    
}
export default Forget;