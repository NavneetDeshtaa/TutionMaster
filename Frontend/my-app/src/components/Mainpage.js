import React, {useState} from 'react';
import "./Mainpage.css";
import { Link, useNavigate } from 'react-router-dom';

function Mainpage() {
  
  const [credentials, setCredentials] = useState({email:"",password:""})
  let navigate = useNavigate(); 

  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5005/api/login", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });
  
      const json = await response.json();
      console.log(json);
  
      if (response.ok) {
        console.log("Login successful");
  
        if (json.userType === 'mentor') {
          navigate("/mentorprofile/:id");
        } else if (json.userType === 'student') {
          navigate("/home");
        } else {
          alert("Unknown user type");
        }
      } else {
        alert(json.errors || "An error occurred during login");
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      alert("An error occurred during login");
    }
  };
  
  
  

     const onChange = (event)=>{
         setCredentials({...credentials,[event.target.name]:event.target.value})
     }

  return (
    <div className='container'>
      <div>
        <h1 className='heading'>Welcome to <span className='title'>TutionMaster</span></h1>
      </div>
      
      <div className='signup'>
        <form >
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="email" id="form2Example1" name="email" value={credentials.email} onChange={onChange} className="form-control" />
            <label className="form-label" style={{"fontSize":"20px"}} htmlFor="form2Example1">Email address</label>
          </div>

          {/* Password input */}
          <div className="form-outline mb-4">
            <input type="password" id="form2Example2" name="password" value={credentials.password} onChange={onChange} className="form-control" />
            <label className="form-label" style={{"fontSize":"20px"}} htmlFor="form2Example2">Password</label>
          </div>

          {/* 2 column grid layout for inline styling */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" check/>
                <label className="form-check-label" style={{"fontSize":"20px"}} htmlFor="form2Example31"> Remember me </label>
              </div>
            </div>

            <div className="col">
              {/* Simple link */}
              <Link className="forgot" style={{"fontSize":"20px"}} to="#">Forgot password?</Link>
            </div>
          </div>

          {/* Submit button */}
          <button type="button" onClick={handleLogin} className="btn btn-primary btn-block mb-4" style={{"width":"100%"}}>Sign in</button>

          {/* Register buttons */}
          <div className="text-center">
            <p style={{"fontSize":"23px"}}>Not a member? </p>
            <Link className='register' style={{"fontSize":"20px"}} to="/studentsignup">Register as Student</Link>
            <Link className='register' style={{"fontSize":"20px"}} to="/mentorsignup">Register as Mentor</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Mainpage;
