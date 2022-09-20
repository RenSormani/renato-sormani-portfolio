import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.scss";
import projImg1 from "../../assets/img/brewdog.jpg";
import projImg2 from "../../assets/img/new-snake.jpg";
import projImg3 from "../../assets/img/hostile-aliens.jpg";
import projImg4 from "../../assets/img/Electrical-1.jpg";
import projImg5 from "../../assets/img/calculator.jpg";
import projImg6 from "../../assets/img/morse-new.jpg";
import projImg8 from "../../assets/img/github-logo.jpg";
import projImg10 from "../../assets/img/icecream-new.svg";
import TrackVisibility from "react-on-screen";
import { ArrowRightCircle } from "react-bootstrap-icons";

const url1 = "https://github.com/RenSormani/brewdog-app";
const url2 = "https://github.com/RenSormani/jrd-electrical-ltd";
const url3 = "https://github.com/RenSormani/snake";
const url4 = "https://github.com/RenSormani/hostile-aliens";
const url5 = "https://github.com/RenSormani/calculator_project";
const url6 = "https://github.com/RenSormani/morseCodeTraslator";
const url8 = "https://github.com/RenSormani/";
const url10 = "https://github.com/RenSormani?tab=repositories";

export const Projects = () => {
  const projects = [
    {
      title: "What's Your Brew, Dog",
      description: "This React app allows you to search the entire back catalogue of Brewdog beers thanks to some nifty API manipulation.",
      imgUrl: projImg1,
      url: url1,
    },
    {
      title: "JRD Electrical Ltd",
      description: "Commissioned by JRD Electrical Ltd to redesign their website. React, JavaScript and Sass were the order of the day!",
      imgUrl: projImg4,
      url: url2,
    },
    {
      title: "It'sssssssss Snake!",
      description: "Remember Snake on the Nokia 3310? Well I redesigned it using CSS, (minimal) HTML and JavaScript. Game on!",
      imgUrl: projImg2,
      url: url3,
    },
    {
      title: "Hostile Aliens v2",
      description: "An interesting desktop version of Space Invaders created with all my JavaScript and Sass know-how. The invasion has begun!",
      imgUrl: projImg3,
      url: url4,
    },
    {
      title: "Calculate This...",
      description: "What's that you say? A fully functioning calculator created and designed using HTML, CSS and JavaScript? Sums it up nicely!",
      imgUrl: projImg5,
      url: url5,
    },
    {
      title: "Use The Morse, Luke!",
      description: "We love code. Even Morse Code. This little snazzy Morse Coder uses JavaScript to handle all the heavy lifting. ",
      imgUrl: projImg6,
      url: url6,
    },
  ];

  const projects2 = [
    
    {
      title: "My GitHub Page...",
      description: "Head over to my GitHub for even more projects, including ticket trackers, games and my original portfolio made from HTML and CSS.",
      imgUrl: projImg8,
      url: url8,
    },
   
  ];

  const projects3 = [
    {
      title: "The Ice Is Right!",
      description: "I am currently working on a website for a new icecream parlour in the area called Sorella's. Watch this space...",
      imgUrl: projImg10,
      url: url10,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Work</h2>
                  <div className="project-box">
                    <p>
                      What's a portfolio without a few examples of work? Well,
                      not a portfolio for one. So, without further ado, I
                      present to you some of my recent projects. Click on the
                      desired project title and get zoomed to its GitHub
                      page to see the project in full. Alternatively, click the
                      arrow to go to my GitHub page and see all my work.
                    </p>
                  </div>
                  <div className="logo-container">

                  <button>
                  <a href="https://github.com/RenSormani" target="_blank">
                        {" "}
                      To my GitHub <ArrowRightCircle size={30} />
                    </a>
                  </button>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">PROJECTS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">MORE PROJECTS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">IN PROGRESS...</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="development-row">
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="development-row">
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
