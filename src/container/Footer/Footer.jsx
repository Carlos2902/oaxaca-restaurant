import React from 'react';
import {FaXTwitter} from 'react-icons/fa6';
import {FiFacebook, FiInstagram} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay/>
    <Newsletter/>

    <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">1278 St Clair Ave W Toronto, ON</p>
          <p className="p__opensans">+1 343-596-4692</p>
          <p className="p__opensans">+1 647-980-0123</p>
        </div>
        {/* Social media icons */}
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">"The best way to find yourself is to lose yourself in the servicee of others."</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}}/>
          <div className="app__footer-links_icons">
            <FiFacebook/>
            <FaXTwitter/>
            <FiInstagram/>
          </div>
        </div>

      {/* working hours */}
        <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am - 11:00 pm</p>
        </div>
      </div>


        <div className="footer__copyright">
          <p className="p__opensans">2024. Oaxaca. All Rights Reserved.</p>
        </div>
  </div>
);

export default Footer;
