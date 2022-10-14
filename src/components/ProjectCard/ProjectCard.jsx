import React from "react";
import "./ProjectCard.scss";
import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, url, urlExtra }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>{" "}
          <div className="proj-txtx-copy">
            <span>{description}</span>
          </div>
          <div className="link-buttons">
            <div className="arrow">
              <a href={url}>
                {" "}
                <Github size={30} />
              </a>
            </div>
            <div className="arrow">
              <a href={urlExtra}>
                {" "}
                <ArrowRightCircle size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export const ProjectCard2 = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>{" "}
          <div className="proj-txtx-copy">
            <span>{description}</span>
          </div>
          <div className="link-buttons">
            <div className="arrow">
              <a href={url}>
                {" "}
                <Github size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
