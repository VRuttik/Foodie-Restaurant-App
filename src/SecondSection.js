import React from 'react';
import './SecondSection.css'; // Import your CSS file for styling

const SecondSection = () => {
    return (
        <section className="second-section w3-animate-zoom w3-black">
            <div className="container">
                <div className="row">
                    {/* Left side (Image) */}
                    <div className="col-md-6">
                        <img
                            src="https://www.shutterstock.com/shutterstock/videos/1039227434/thumb/8.jpg?ip=x480"
                            alt="Image"
                            className="image"
                        />
                    </div>

                    {/* Right side (Title and Paragraph) */}
                    <div className="col-md-6">
                        <div className="content">
                            <h1>About Restaurant</h1>
                            <p>
                                At our restaurant, we're not just about food; we're about creating memorable experiences. Nestled in the heart of the city, our charming eatery offers a delightful fusion of flavors and a warm, inviting atmosphere that will transport you to a world of culinary bliss. Our talented chefs craft each dish with passion, using locally-sourced ingredients to ensure the freshest, most exquisite flavors. Whether you're seeking a romantic dinner for two, a family celebration, or a casual lunch with friends, our restaurant is the perfect destination. Join us and embark on a gastronomic journey like no other.
                            </p>

                            <h3>Restaurant Opening Times:</h3>
                            <b>Mon - Fri:</b> 11:30 AM - 10:00 PM<br/>
                            <b>Saturday:</b> 12:00 PM - 11:00 PM<br/>
                            <b>Sunday: 12:00 PM</b> - 9:00 PM
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;

