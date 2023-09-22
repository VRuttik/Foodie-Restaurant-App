import React from 'react';

function ServiceMain() {
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px', // Adjust the font size as needed
    color: 'white', // Text color
    // Add any other text styles you want here
  };

  return (
    <div className='container'>
      <div style={containerStyle}>
        <img
          src="https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg"
          alt="Responsive Image"
          style={imageStyle}
        />
        <div style={textStyle}>
            We always proviede best Service.
        </div>
      </div>
    </div>
  );
}

export default ServiceMain;
