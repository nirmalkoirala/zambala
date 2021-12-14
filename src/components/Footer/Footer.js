import React from "react";
import "./FooterStyles.css";
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
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#000", marginRight: "2rem" }}
            />
            <div>
              <p>22/8 Goodchild Street</p>
              <h4>Lyneham, ACT 2602</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />{" "}
              0435 816 031
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />{" "}
              trops@galaxy.com
            </h4>
          </div>
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
              style={{ color: "#000", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
