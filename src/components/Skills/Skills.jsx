import React from "react";
import "./Skills.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter-4.svg";
import meter2 from "../../assets/img/meter5.svg";
import meter3 from "../../assets/img/meter6.svg";
import meter4 from "../../assets/img/meter7.svg";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Experience</h2>
              <p>
                I may have graduated from the _nology school of web
                design, but my experience stretches wider than just the web. As
                a successful businessman/restaurant owner, with over 10-years'
                prior experience as a journalist, and most recently as an
                Academic Mentor for Maths GCSE students, you wouldn't be wrong
                in suggesting my experience is varied. As such I have acquired
                competencies for all situations. Take a quick peek at my CV to see
                what's what... </p> 
                <p>
                <div className='development-row'>
                
                  <a href="https://drive.google.com/file/d/1BucIfl5rskdq-A3LmemUq8-t3XVDSZ-_/view?usp=sharing" target="_blank">
                        {" "}
                      To my CV <ArrowRightCircle size={30} />
                    </a>
                  
                  </div>
                </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="restaurant" />
                  <h5>Restaurant Owner</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="journalist" className="journo" />
                  <h5>Journalist</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="teacher" />
                  <h5>Academic Mentor</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="graduate" />
                  <h5>_nology Graduate</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
