import React from 'react';

import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Tasty</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Step into a world of gastronomic delight, where 
        we celebrate the rich and tantalizing flavors of Oaxacan cuisine. 
        Nestled in the heart of Mexico, Oaxaca is renowned for its diverse
          and exquisite flavors.
      </p>
    
    <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">

    </div>
  </div>
);

export default Header;
