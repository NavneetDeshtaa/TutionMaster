import React, { useEffect, useState } from 'react';

function Coursel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (activeIndex + 1) % 3; // Assuming you have 3 carousel items
      setActiveIndex(newIndex);
    }, 3000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [activeIndex]);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide container mb-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <img src="https://media.istockphoto.com/id/1074730846/photo/stay-positive-work-hard.webp?b=1&s=170667a&w=0&k=20&c=PnxdpB7OCB4a3bbG-pVF8yTvHa6aVZ4Y_D8yticnxis=" className="d-block w-100" style={{ "height": "500px" }} alt="..." />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img src="https://media.istockphoto.com/id/1157710289/photo/big-journeys-begin-with-small-steps.jpg?s=612x612&w=0&k=20&c=sL4KIdsFaJtEylKRdcOwyVRFCG-g0yiP76uCH4RmDh4=" className="d-block w-100" style={{ "height": "500px" }} alt="..." />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <img src="https://media.istockphoto.com/id/996796324/photo/motivational-and-inspirational-quote.jpg?s=612x612&w=0&k=20&c=9WCY8Chk0nQ4jIF2jpHfvZBhOYsH7SXkqbkRPiQoJng=" className="d-block w-100" style={{ "height": "500px" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={() => handleSlide((activeIndex - 1 + 3) % 3)}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={() => handleSlide((activeIndex + 1) % 3)}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Coursel;
