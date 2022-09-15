import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.scss";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import logo from "../../assets/img/main-image.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaReact } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

import { SiFirebase, SiHtml5, SiCss3 } from "react-icons/si";

const element = <FaReact />;
const element2 = <FaJsSquare />;
const element3 = <SiFirebase />;
const element4 = <SiHtml5 />;
const element5 = <FaSass />;
const element6 = <SiCss3 />;
const element7 = <FaNodeJs />;

<FontAwesomeIcon icon="fa-brands fa-react" />
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 400;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta); // eslint-disable-next-line

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(700);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <div className="text-intro">
                    <h1>
                      {`Hi! I'm Renato`}{" "}
                      <div>
                        <span
                          className="txt-rotate"
                          data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                        >
                          <span className="wrap">{text}</span>
                        </span>
                      </div>
                    </h1>
                  
                    <p>
                      See that floating head there? Yep, that's me. A budding
                      software developer/web designer. I am currently studying
                      at _nology and learning the ins and outs of everything
                      web-related. Here are just some of the technolgies I have
                      been working with:</p>
                  </div>
                  <div className="prog-logos col-lg-8 col-xs-12 col-centered">
                    <div className="prog-logos-box">
                      <div className="element">{element}</div>
                      <p>ReactJS</p>
                    </div>
                    <div className="prog-logos-box">
                    <div className="element">{element2}</div>
                      <p>JavaScript</p>
                    </div>
                    <div className="prog-logos-box">
                    <div className="element">{element3}</div>
                      <p>Firebase</p>
                    </div>
                    <div className="prog-logos-box">
                    <div className="element">{element4}</div>
                      <p>HTML</p>
                    </div>
                    <div className="prog-logos-box">
                    <div className="element">{element5}</div>
                      <p>Sass</p>
                    </div>
                    <div className="prog-logos-box">
                    <div className="element">{element6}</div>
                      <p>CSS</p>
                    </div>
                    <div className="prog-logos-box">
                    <div className="element">{element7}</div>
                      <p>Node</p>
                    </div>
                  </div>
                
                  <button>
                    <a href="#connect">
                      Let’s Connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="moving-logo">
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={logo} alt="Header Img" className="main-image" />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
