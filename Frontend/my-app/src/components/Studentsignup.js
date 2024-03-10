import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Studentsignup() {
  const navigate = useNavigate();

  const[credentials , setCredentials] = useState({firstname:"",lastname:"",mothername:"",fathername:"",address:"",gender:"",classes:"",state:"",district:"",dob:"",pincode:"",contact:"",email:"",password:"",repeatpassword:""})

  const onchange = (event)=>{
     setCredentials({...credentials,[event.target.name]:event.target.value});
  };

  const handleSubmit = async (e)=>{
      e.preventDefault();

      try {
        const response = await fetch('http://localhost:5005/api/studentsignup', {
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
    <div className='container'>
      
        
        <section className="h-100 bg-light">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample" className="img-fluid"
                style={{"border-top-left-radius: .25rem; border-bottom-left-radius": ".25rem;"}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Student registration form</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" name='firstname' onChange={onchange} className="form-control form-control-lg" />
                      <label className="form-label"  for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" name='lastname' onChange={onchange} className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" name='mothername' onChange={onchange} className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n1" name='fathername' onChange={onchange} className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8"  name='address' onChange={onchange} className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example8">Address</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div className="row">
                <div className="col-md-6 mb-4">
                

<select class="select">
  <option value="1">Class</option>
  <option value="2">Class 1</option>
  <option value="3">Class 2</option>
  <option value="4">Class 3</option>
  <option value="4">Class 4</option>
  <option value="4">Class 5</option>
  <option value="4">Class 6</option>
  <option value="4">Class 7</option>
  <option value="4">Class 8</option>
  <option value="4">Class 9</option>
  <option value="4">Class 10</option>
  <option value="4">Class 11</option>
  <option value="4">Class 12</option>
</select>

</div>
                  <div className="col-md-6 mb-4">

                    <select className="select">
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

                    <select className="select">
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
                  <input type="text" id="form3Example9" name='dob' onChange={onchange} className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example9">DOB</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example90" name='pincode' onChange={onchange} className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example90">Pincode</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" name='contact' onChange={onchange} className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example99">Contact number</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" name='email' onChange={onchange} className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example97">Email ID</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" name='password' onChange={onchange} class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" name='repeatpassword' onChange={onchange} class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>
                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset all</button>
                  <button onClick={handleSubmit} type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>

    </div>
  )
}

export default Studentsignup