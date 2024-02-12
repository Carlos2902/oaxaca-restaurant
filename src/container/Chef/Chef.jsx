import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    {/* content */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant"> What We Believe In </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"></p>
        </div>
            <p className="p__opensans">
            I believe that food is a universal path of communication. By bringing culture and love to the table, the stomach becomes not just a receptacle for sustenance, but a vessel for shared experiences and cherished memories. At Deluxe Oaxacan, we celebrate the power of food to connect hearts and souls, transcending borders and fostering harmony in our global community.
            </p>
      </div>

          <div className="app__chef-sign">
            <p>Carlos Lopez Rosado</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="sign_image" />
          </div>
        </div>
      </div>

 
);

export default Chef;
