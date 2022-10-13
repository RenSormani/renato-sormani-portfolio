import React from "react";
import "./ProjectCard.scss";
import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, url, urlExtra }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <a href={url}>
            <h4>{title}</h4>{" "}
          </a>
          <div className="proj-txtx-copy">
          <span >{description}</span>
          </div>
          <div className="arrow">
          <a href={urlExtra}>
                        {" "}
                      <ArrowRightCircle size={30} />
                    </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
