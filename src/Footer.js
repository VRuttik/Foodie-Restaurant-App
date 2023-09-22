import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <div className="footer-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="footer-column w3-text-white">
              <h4 className='w3-text-orange'>Quick Links</h4>
              <ul>
                <li>
                  <a href="#top" onClick={scrollToTop}>Back to Top</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                {/* Add more links here */}
              </ul>
            </div>
            <div className="footer-column w3-text-white">
              <h4 className='w3-text-orange'>Navigation</h4>
              <ul>
                <li>
                  <Link to ="/">Home</Link>
                </li>
                <li>
                  <Link to ="/about">About</Link>
                </li>
                <li>
                  <Link to ="/service">Services</Link>
                </li>
                {/* Add more links here */}
              </ul>
            </div>
          </div>
        </div>
        <p className='w3-orange w3-center'>&copy; {new Date().getFullYear()} Foodie Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

