import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaGlobe, FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram, FaSkype, FaDribbble } from 'react-icons/fa';
import { BsFillTelephoneFill } from "react-icons/bs";

import './Second.css';

const TopHeader = () => {
  return (
    <div className="top-header container-fluid no-padding">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Left Section: Language Dropdown and Phone Number */}
        <div className="left-section d-flex align-items-center">
          
          {/* Language Dropdown */}
          <Dropdown className="language-dropdown me-3">
            <Dropdown.Toggle variant="link" id="language" className="btn dropdown-toggle" aria-haspopup="true" aria-expanded="true">
              <FaGlobe /> Languages: English
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" title="Danish"><FaGlobe /> Danish</Dropdown.Item>
              <Dropdown.Item href="#" title="German"><FaGlobe /> German</Dropdown.Item>
              <Dropdown.Item href="#" title="French"><FaGlobe /> French</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Vertical Line between Language Dropdown and Phone Number */}
          <div className="vertical-line"></div>

          {/* Phone Number */}
          <ul className="contact mb-0">
            <li>
              <a href="tel:1-800-23-456-7890" title="1-800-23-456-7890">
                <BsFillTelephoneFill className="me-2" /> Phone: 6379056103
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Icons */}
        <div className="social-icons">
          <ul className="d-flex mb-0">
            <li className="social-icon">
              <a href="#" title="Facebook"><FaFacebookSquare /></a>
            </li>
            <li className="social-icon">
              <a href="#" title="Twitter"><FaTwitter /></a>
            </li>
            <li className="social-icon">
              <a href="#" title="Pinterest"><FaPinterest /></a>
            </li>
            <li className="social-icon">
              <a href="#" title="Instagram"><FaInstagram /></a>
            </li>
            <li className="social-icon">
              <a href="#" title="Skype"><FaSkype /></a>
            </li>
            <li className="social-icon">
              <a href="#" title="Dribbble"><FaDribbble /></a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;
