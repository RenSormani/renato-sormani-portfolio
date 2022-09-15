import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.scss";
import projImg1 from "../../assets/img/brewdog.jpg";
import projImg2 from "../../assets/img/new-snake.jpg";
import projImg3 from "../../assets/img/hostile-aliens.jpg";
import projImg4 from "../../assets/img/Electrical-1.jpg";
import projImg5 from "../../assets/img/calculator.jpg";
import projImg6 from "../../assets/img/morse-new.jpg";
import projImg7 from "../../assets/img/ticket.png";
import projImg8 from "../../assets/img/hostile-aliens-v1.png";
import projImg9 from "../../assets/img/portfolio-original.jpg";
import projImg10 from "../../assets/img/icecream.jpg";
import TrackVisibility from "react-on-screen";
import { ArrowRightCircle } from "react-bootstrap-icons";

const url1 = "https://github.com/RenSormani/brewdog-app";
const url2 = "https://github.com/RenSormani/jrd-electrical-ltd";
const url3 = "https://github.com/RenSormani/snake";
const url4 = "https://github.com/RenSormani/hostile-aliens";
const url5 = "https://github.com/RenSormani/calculator_project";
const url6 = "https://github.com/RenSormani/morseCodeTraslator";
const url7 = "https://github.com/RenSormani/ticket-tracker";
const url8 = "https://github.com/RenSormani/hostile-aliens-v1";
const url9 = "https://github.com/RenSormani/renato-portfolio";
const url10 = "https://github.com/RenSormani?tab=repositories";

export const Projects = () => {
  const projects = [
    {
      title: "What's Your Brew, Dog?",
      description: "What better way to showcase API manipulation than with the Punk API and their catalogue of Brewdog beers? This React app allows you to search the entire back catalogue of beers, or pick one lucky beverage using the beer randomiser.",
      imgUrl: projImg1,
      url: url1,
    },
    {
      title: "JRD Electrical Ltd",
      description: "Real-world website redesign using react",
      imgUrl: projImg4,
      url: url2,
    },
    {
      title: "Feed The Snake",
      description: "Using JavaScript to recreate a classic game",
      imgUrl: projImg2,
      url: url3,
    },
    {
      title: "Hostile Aliens v2",
      description: "JavaScript game development",
      imgUrl: projImg3,
      url: url4,
    },
    {
      title: "Calculate This...",
      description: "Fully functioning JavaScript calculator",
      imgUrl: projImg5,
      url: url5,
    },
    {
      title: "Use The Morse, Luke!",
      description: "HTML, CSS & JavaScript put to good use",
      imgUrl: projImg6,
      url: url6,
    },
  ];

  const projects2 = [
    {
      title: "Tickets, Please!",
      description: "A ticket tracker created using React",
      imgUrl: projImg7,
      url: url7,
    },
    {
      title: "Hostile Aliens v1",
      description: "Original design for Hostile Aliens",
      imgUrl: projImg8,
      url: url8,
    },
    {
      title: "In the beginning was...",
      description: "My original portfolio built using HTML & CSS",
      imgUrl: projImg9,
      url: url9,
    },
  ];

  const projects3 = [
    {
      title: "I scream, you scream...",
      description: "A React website for a local icecream parlour",
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
                      desired project title and get zoomed to my Github
                      page to see the project in full. Alternatively, click the
                      arrow to go to my Github page and see all my work.
                    </p>
                  </div>
                  <div className="logo-container">
                    <div className="git-logo">
                      <a href="https://github.com/RenSormani" target="_blank">
                        {" "}
                        <ArrowRightCircle size={30} />
                      </a>
                    </div>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">More projects...</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">In progress...</Nav.Link>
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
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Currently in development is a website commissioned by
                          a new local icecream parlour, Sorella's. The site
                          itself will be built in React and will showcase the
                          company's signature products. Watch this space for
                          delicious icecream...
                        </p>

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
