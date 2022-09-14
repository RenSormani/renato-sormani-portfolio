import React from "react";
import "./Footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/Logo1.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="logo-box">
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/renato-sormani-87a56b68"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/renato.sormani" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/renato.sormani.1979/"
                target="_blank"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Website design by Renato Sormani. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
