import React from 'react';
import './Section.css'; // Import your CSS file

const Section = () => {
  return (
    <section className="video-section">
      {/* Background video */}
      <video autoPlay muted loop className="background-video">
        <source src="/video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <h1><b>Foodie Reastaurant</b></h1>
        <p id='rest' className='w3-ahoma'>Our restaurant offers a tantalizing array of gourmet dishes 
          meticulously crafted to delight your taste buds, making every 
          visit a memorable culinary journey.</p>

        {/* Buttons */}
        
        <button class="w3-button w3-round-large w3-orange w3-hover-blue"> Start</button>
        
        
      </div>
    </section>
  );
};

export default Section;
