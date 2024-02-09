import React from 'react';

import {SubHeading} from '../../components';
import './Newsletter.css';

const Newsletter = () => {

  console.log("Newsletter component is being rendered");

  return(
    // Container first
  <div className="app__newsletter" >
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter"/>
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And Never Miss Lastes Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input 
      type="email"
      placeholder="Enter your email address"/>
      <button className="custom__button">Suscribe</button>
    </div>
  </div>
  );
  };

export default Newsletter;
 