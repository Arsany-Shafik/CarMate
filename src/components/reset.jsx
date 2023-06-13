import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Reset =() => {
    const [error, setError] = useState({
        password: '',
        confirmPassword: ''
      }); 
      const [input, setInput] =  useState({
        password: '',
        confirmPassword: ''
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
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
     
          switch (name) {
     
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
      const navigate = useNavigate();
      const [mesg, setmesg] = useState('');

      
      const Submit2 =  async e => {
        let token = document.getElementById("token").value;
        
        e.preventDefault();
        let userData = {
          password: input.password,
          ConfirmPassword:input.confirmPassword,
          
        };
      await axios.patch(`https://car-mate-t012.onrender.com/api/v1/users/resetPassword/${token}`, userData).then( (response) => {
      console.log(response.status, response.data.token);
      alert("------------------\nsuccessful ^_^ \n\n The Password has been Changed")
      navigate("/")
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
      
         <form  className='formlogin'  onSubmit={Submit2}  >
         <h3 className='text-primary title'>Reset Password</h3>

        <div className='block'>

        <div className="mb-2 ">
          <label className='lab'>Reset Code</label>
          <input
            type="text"
            id="token"
            className="form-control m-auto"
            placeholder="Enter the code"
            name="token"
            required
          />
          </div>
              <h6 className='mesg'>{mesg}</h6>
<hr/><hr/>
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
        </div>

        <div>
          <button type="submit" className='btnlog' id='button'>
            <span> Confirm</span> 
          </button>
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
  };
export default Reset;