import React from "react";
import "./LandingStyles.css";
import {
  FaSearchLocation,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMailBulk,
  FaClock
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="landing">
      <div className="landing-container">
      <div className="right">
          <h3>About the company</h3>
          <p>
          Zambala Education Consultancy Australia is a client-focused and result-driven
           education agency in Australia. Our qualified education counsellors provide 
           up-to-date and correct information to make informed choices right from the 
           beginning. We assist all students aspiring to study in Australia with 
           admission, visa application, accommodation, health insurance, airport 
           pick-up and many more, ensuring smooth transition. Your peace of mind 
           is guaranteed! {" "}
          </p>
          </div>
        <div className="left">
          <a className="clicklink" href="tel:+61435816031">
          <div className="location">
            <FaPhone
              size={20}
              style={{ color: "#5AAC51 ", marginRight: "1rem" }}
            />
            <div>
              <p>Phone Number</p>
              <h4>0435 816 031</h4>
            </div>
          </div>
          </a>

          <a className="clicklink" href="mailto:info@zambalaeducation.com.au">
          <div className="location">
            <FaMailBulk
              size={20}
              style={{ color: "#5AAC51 ", marginRight: "1rem" }}
            />
            <div>
              <p>Email</p>
              <h4>info@zambalaeducation.com.au</h4>
            </div>
          </div>
          </a>

                    <a className="clicklink">
          <div className="location">
            <FaClock
              size={20}
              style={{ color: "#5AAC51 ", marginRight: "1rem" }}
            />
            <div>
              <p>Opening Hours</p>
              <h4>Mon - Sun / 9am - 5pm</h4>
            </div>
          </div>
          </a>

                    <a className="clicklink">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#5AAC51 ", marginRight: "1rem" }}
            />
            <div>
              <p>22/8 Goodchild Street</p>
              <h4>Lyneham, ACT 2602</h4>
            </div>
          </div>
          </a>         
          
        </div>

        </div>
      </div>
  );
};

export default Footer;
