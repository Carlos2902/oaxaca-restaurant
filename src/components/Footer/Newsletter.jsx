import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {

  console.log("Newsletter component is being rendered");

  return(
  <div className="app__newsletter" >
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter"/>
    </div>
  </div>
  );
  };

export default Newsletter;
