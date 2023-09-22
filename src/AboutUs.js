import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      <div className="container-1">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p>
              Foodie Restaurant is a culinary haven where flavors come to life. With a diverse menu crafted from the finest ingredients, it offers a gastronomic journey that caters to all palates. Our chefs blend innovation with tradition to create mouthwatering dishes that delight the senses. The warm and inviting ambiance, paired with impeccable service, makes every visit a memorable dining experience. Foodie Restaurant is the perfect destination for food enthusiasts seeking exceptional cuisine in an inviting atmosphere.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2019/06/25/13/59/city-4298285_640.jpg"
              alt="Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

