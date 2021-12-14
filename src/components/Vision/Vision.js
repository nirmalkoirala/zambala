import React from "react";
import "./VisionStyles.css";
import {
  FaSearchLocation,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import Pic1 from '../../assets/drukul1.jpg'
import Pic2 from '../../assets/drukul2.jpg'

const Landing = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h3>Our Vision</h3>
          <p>
          Our vision is to become one of the best education agencies in Australia.
           Our mission is to help all prospective students to materialise their dreams 
           by providing the right course and the best institution available in the market.
          </p>
          <p>
          We also strive to deliver the highest standard of service and care to enhance the reputation and quality of institutions and the Australian education system at large.
          </p>
        </div>
        <div className="right">

        <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Pic2} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pic1} className='img' alt='' />
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
