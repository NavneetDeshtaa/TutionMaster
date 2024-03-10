import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Mentorsignup() {

    const navigate = useNavigate();

  const[credentials , setCredentials] = useState({firstname:"",lastname:"",education:"",experience:"",address:"",gender:"",state:"",district:"",dob:"",aboutyou:"",contact:"",email:"",password:"",repeatpassword:""})

  const onChange = (event)=>{
     setCredentials({...credentials,[event.target.name]:event.target.value});
  };

  const handleSubmit = async (e)=>{
      e.preventDefault();

      try {
        console.log('Sending data:', credentials);


        const response = await fetch('http://localhost:5005/api/mentorsignup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
          // other options like body
        });
    
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }

        else{
          alert('Form submitted successfully! Please Login again to Continue');
          navigate("/")
        }
    
        // Handle successful response
      } catch (error) {
        console.error('Error during fetch:', error);
      }

  };
  return (
    <section className="h-100 bg-dark">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample" className="img-fluid"
                  style={{"border-top-left-radius": ".25rem border-bottom-left-radius .25rem"}} />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">Mentor registration form</h3>
                  
  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m" name='firstname'  onChange={onChange} className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1m">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1n" name='lastname'  onChange={onChange} className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1n">Last name</label>
                      </div>
                    </div>
                  </div>
  
                  
                <div className="form-outline mb-4">
                    <input type="text" id="form3Example8" name='address'  onChange={onChange} className="form-control form-control-lg" />
                    <label className="form-label" for="form3Example8">Address</label>
                  </div>
  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      
  
                    <select className="select" name='state'>
                      <option value="1">State</option>
                      <option value="2">Himachal Pradesh</option>
                      <option value="3">Punjab</option>
                      <option value="4">Haryana</option>
                      <option value="4">Jammu and kashmir</option>
                      <option value="4">Haryana</option>
                      <option value="4">Uttar pradesh</option>
                      </select>
  
                    </div>
                    <div className="col-md-6 mb-4">
  
                    <select className="select" name='district'>
                      <option value="1">District</option>
                      <option value="2">Hamirpur</option>
                      <option value="3">kangra</option>
                      <option value="4">Shimla</option>
                      <option value="4">Chamba</option>
                      <option value="4">Bilaspur</option>
                      <option value="4">Una</option>
                      <option value="4">Kullu</option>
                      <option value="4">Kinaur</option>
                      <option value="4">Sirmour</option>
                      <option value="4">Solan</option>
                      <option value="4">Mandi</option>
                      <option value="4">LahaulandSpiti</option>
                      <option value="4">Chandigarh</option>
                      <option value="4">Ludhiana</option>
                      <option value="4">Jalandhar</option>
                      <option value="4">Ambala</option>
                      <option value="4">Gurugram</option>
                      <option value="4">Amritsar</option>
                      <option value="4">Nainital</option>
                      <option value="4">Dehradun</option>
                    </select>
  
                    </div>
                  </div>
                  
                
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example9" name='dob'  onChange={onChange} className="form-control form-control-lg" />
                    <label className="form-label" for="form3Example9">DOB</label>
                  </div>
  
                  <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" name='contact'  onChange={onChange} className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example99">Contact number</label>
                </div>
                
                <div className="form-outline mb-4">
                    <input type="text" id="form3Example97" name='email'  onChange={onChange} className="form-control form-control-lg" />
                    <label className="form-label" for="form3Example97">Email ID</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example97" name='education'  onChange={onChange} className="form-control form-control-lg" />
                    <label className="form-label" for="form3Example97">Education</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example97" name='experience'  onChange={onChange} className="form-control form-control-lg" />
                    <label className="form-label" for="form3Example97">Experience</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example99" name='aboutyou'  onChange={onChange} className="form-control form-control-lg" />
                    <label className="form-label" for="form3Example99">About you</label>
                  </div>
  
                  <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" name='password'  onChange={onChange} className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cg">Password</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg"  name='repeatpassword'  onChange={onChange} className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>
  
                  <div className="d-flex justify-content-end pt-3">
                    <button type="button" className="btn btn-light btn-lg">Reset all</button>
                    <button type="button" onClick={handleSubmit} className="btn btn-warning btn-lg ms-2">Submit form</button>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Mentorsignup