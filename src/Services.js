import React from 'react';
import './Services.css'; // Import the CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="card-container">
        <div className="card">
          <img src="Birthday_Cake.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Birthday Party</h5>
            <p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card">
          <img src="Bussiness.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Business Meetings</h5>
            <p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card">
          <img src="Wedding.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Wedding Party</h5>
            <p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

