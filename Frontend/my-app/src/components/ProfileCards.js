import React, { useState } from 'react';
import Data from '../text.json';
import { Link } from 'react-router-dom';
import "./ProfileCards.css";


const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarClick = (selectedRating) => {
    onRatingChange(selectedRating);
  };

  const handleStarHover = (hoveredRating) => {
    setHoveredRating(hoveredRating);
  };

  const handleStarLeave = () => {
    setHoveredRating(null);
  };

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      const filled = i <= (hoveredRating || rating);
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={handleStarLeave}
          style={{
            cursor: 'pointer',
            color: filled ? 'gold' : 'lightgrey',
            fontSize:"30px"
          }}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div>
      {renderStars()}
      <p style={{"fontSize":"20px"}}>Selected Rating: {hoveredRating || rating}</p>
    </div>
  );
};

const CardWithRating = ({ post }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <StarRating rating={rating} onRatingChange={handleRatingChange} />
    </div>
  );
};

function ProfileCards() {
  return (
    <div className='container'>
      <div className='row'>
        {Data.map((post) => (
          <div key={post.hourlyRate} className='col-md-4 mb-3'>
            <div className='card'>
              <img className='card-img-top' src={post.imageurl} alt='Card cap' />
              <div className='card-body'>
                <h5 className=' mentornames card-title'>{post.firstname +" " + post.lastname}</h5>
                <p className=' education card-text'>{post.education}</p>
                <p className=' distance card-distance'><ion-icon name="location-outline"></ion-icon>{post.distance}</p>

                <CardWithRating post={post} />

                <Link to={`/mentorprofile/${post.id}`} className=' viewprofile btn btn-primary'>
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCards;
