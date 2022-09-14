import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img-5.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "./Contact.scss";

const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contact-box">
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <h2>Get In Touch</h2>
              <form
                target="_blank"
                action="https://formsubmit.co/436c61e5457bb41446867c7accff800d"
                method="POST"
              >
                <div className="form-group">
                  <div className="form-row">
                    <div className="col">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <span className="contact-text">
                  <button
                    type="submit"
                    className="btn btn-lg btn-dark btn-block"
                  >
                    Submit Form
                  </button>
                </span>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
