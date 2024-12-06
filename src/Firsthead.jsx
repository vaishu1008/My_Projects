import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaGlobe, FaPhoneAlt, FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram, FaSkype, FaDribbble } from 'react-icons/fa';
import './App.css';  // Ensure you have custom CSS if needed

const TopHeader = () => {
  return (
    <div className="top-header">
      {/* Container */}
      <div className="container">
        <div className="header-top-info d-flex justify-content-between align-items-center flex-wrap">
          {/* Language Dropdown and Phone Number in the same row */}
          <div className="d-flex align-items-center mb-2 mb-sm-0">
            {/* Language Dropdown */}
            <Dropdown className="language-dropdown mr-4">
              <Dropdown.Toggle variant="link" id="language" className="btn dropdown-toggle" aria-haspopup="true" aria-expanded="true">
                <FaGlobe /> Languages: English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" title="Danish"><FaGlobe /> Danish</Dropdown.Item>
                <Dropdown.Item href="#" title="German"><FaGlobe /> German</Dropdown.Item>
                <Dropdown.Item href="#" title="French"><FaGlobe /> French</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Phone Info */}
            <ul className="contact mb-0">
              <li>
                <a href="tel:6379056103" title="Call 6379056103">
                  <FaPhoneAlt /> Phone: 6379056103
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <ul className="d-flex mb-0">
              <li><a title="Facebook" href="#"><FaFacebookSquare /></a></li>
              <li><a title="Twitter" href="#"><FaTwitter /></a></li>
              <li><a title="Pinterest" href="#"><FaPinterest /></a></li>
              <li><a title="Instagram" href="#"><FaInstagram /></a></li>
              <li><a title="Skype" href="#"><FaSkype /></a></li>
              <li><a title="Dribbble" href="#"><FaDribbble /></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* End of Container */}
    </div>
  );
};

export default TopHeader;

