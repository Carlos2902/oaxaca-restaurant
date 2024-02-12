import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* Letter G background */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    {/* Left side about us content */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
          <p className="p__opensans">Step into a world of culinary excellence at Deluxe Oaxacan. Our passion lies in bringing the authentic flavors of Oaxacan cuisine to your table. With a commitment to quality and tradition, we invite you to savor every moment as we embark on a journey through the vibrant tapestry of Oaxacan gastronomy.</p>
          <button type="button" className="custom__button">Know More</button>
      </div>  
      {/* Knife Img */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife"/>
      </div>
      {/* Right side content */}
      <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our history</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
          <p className="p__opensans">Our history is woven with the threads of Oaxacan heritage, reflecting the resilience and richness of our culinary legacy. From ancient rituals to modern innovations, each chapter unfolds with the essence of tradition and innovation, ensuring a timeless experience for every palate.</p>
          <button type="button" className="custom__button">Know More</button>
      </div> 
    </div>

      

  </div>
);

export default AboutUs;
