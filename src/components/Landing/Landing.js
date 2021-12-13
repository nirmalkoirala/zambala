import React from "react";
import "./LandingStyles.css";
import {
  FaSearchLocation,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">

          <a className="btn">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>22/8 Goodchild Street</p>
              <h4>Lyneham, ACT 2602</h4>
            </div>
          </div>
          </a>

          <a className="btn">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>22/8 Goodchild Street</p>
              <h4>Lyneham, ACT 2602</h4>
            </div>
          </div>
          </a>

                    <a className="btn">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>22/8 Goodchild Street</p>
              <h4>Lyneham, ACT 2602</h4>
            </div>
          </div>
          </a>

                    <a className="btn">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>22/8 Goodchild Street</p>
              <h4>Lyneham, ACT 2602</h4>
            </div>
          </div>
          </a>         
          
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Samdpai Dondrup Education Consultancy is an education agent and
            service provider established in 2019 with our main office in
            Thimphu, Bhutan. We have branch offices in Canberra, Brisbane and
            Perth, Australia.{" "}
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
