import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Mentorprofile.css"

function MentorProfile() {

  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };
  return (
    
    <>
    <section  style={{"background-color":"#eee"}}>

    <div className="container py-5">
  <div className="row">
    <div className="col">
      <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
        <ol className="breadcrumb mb-0">
        <li className=" userprofile " aria-current="page">User Profile</li>
          <li className="homeutton "><Link className='homiee' to="/home">Back to Home</Link></li>
              
        </ol>
      </nav>
    </div>
  </div>

  <div className="row">
    
    <div className="col-lg-8">
      <div className="card mb-4">
        <div className=" mentordata card-body">
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Full Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">John Doe</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">john.doe@example.com</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Phone</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">92345678909</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Availability</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">Monday to Friday, 9 AM - 5 PM</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Experience</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">10+ years</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Mobile</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">98234567890</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">HourlyRate</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">$50</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">About</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">Experienced mathematics professor with a passion for teaching.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Address</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">123 Main St, City A, Country</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 mb-md-0">
            <div className=" mentordata card-body">
              <p className="mb-4">Experience</p>
              <p className="mb-1" style={{"font-size":".77rem;"}}>English Literature</p>
              <div className="progress rounded" style={{"height":"5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"80%"}} aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="mt-4 mb-1" style={{"font-size":" .77rem;"}}>Hindi</p>
              <div className="progress rounded" style={{"height":" 5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"72%"}} aria-valuenow="72"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="mt-4 mb-1" style={{"font-size":" .77rem;"}}>Mathematics</p>
              <div className="progress rounded" style={{"height":" 5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"89%"}} aria-valuenow="89"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="mt-4 mb-1" style={{"font-size":" .77rem;"}}>Sanskrit</p>
              <div className="progress rounded" style={{"height":" 5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"55%"}} aria-valuenow="55"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="mt-4 mb-1" style={{"font-size": ".77rem;"}}>Social Science</p>
              <div className="progress rounded mb-2" style={{"height":" 5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"66%"}} aria-valuenow="66"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 mb-md-0">
            <div className=" mentordata card-body">
              <p className="mb-4">Additional Skills</p>
              <p className="mb-1" style={{"font-size": ".77rem;"}}>Web Design</p>
              <div className="progress rounded" style={{"height":" 5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"80%"}} aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="mt-4 mb-1" style={{"font-size":".77rem;"}}>JavaScript</p>
              <div className="progress rounded" style={{"height":"5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"72%"}} aria-valuenow="72"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="mt-4 mb-1" style={{"font-size":".77rem;"}}>MongoDB</p>
              <div className="progress rounded" style={{"height":"5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"89%"}} aria-valuenow="89"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="mt-4 mb-1" style={{"font-size":".77rem;"}}>Writing</p>
              <div className="progress rounded" style={{"height": "5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"55%"}} aria-valuenow="55"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className="mt-4 mb-1" style={{"font-size":".77rem;"}}>Cricket</p>
              <div className="progress rounded mb-2" style={{"height":"5px;"}}>
                <div className="progress-bar" role="progressbar" style={{"width":"66%"}} aria-valuenow="66"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    <div className=" rightbox col-lg-4">
      <div className="card mb-4">
        <div className="card-body text-center">
          <img src="https://media.istockphoto.com/id/1326432983/photo/portrait-of-a-mature-men-standing-isolated-over-purple-background-stock-photo.jpg?s=612x612&w=0&k=20&c=TJvwkFts1YgIy5oUluOk4DQaNFtsK3rLT3yDH21_St4=" alt="avatar"
            className="rounded-circle img-fluid" style={{"width":"150px;"}}/>
          <h5 className=" name my-3">John Doe</h5>
          <p className="text-muted mb-1">Oxford University</p>
          <p className="text-muted mb-4">Canada , USA</p>
          <div className="d-flex justify-content-center mb-2">
            <button type="button" onClick={handleFollowToggle} className=" follow btn btn-outline-primary ms-1">{isFollowing ? 'Following' : 'Follow'}</button>
            <button type="button" className=" message btn btn-outline-primary ms-1">Message</button>
          </div>
        </div>
      </div>

    </div>
     
  </div>
</div>
    </section>
    
  </>
  )
}

export default MentorProfile
