
import "./card.scss";
import { useState, useEffect  } from "react";
import PropTypes from "prop-types";
import Slideshow from "../Slideshow";
import Projects from "../../datas/projects.json";
import Technos from "../../datas/technologies.json";
import React from 'react';

function Card() {
  const [projectState] = useState(Projects);
  const [technoState] = useState(Technos);
 
  return (
    <div className="cardContainer">
      {projectState.projects.map((project) => {
        const technologies = project.technos.map((technoId) =>
          technoState.technologies.find((tech) => tech.id === technoId)
        );
        return (
        <div className="card">
          <div className="left">
            <img
              className="cardImg"
              src={require(`../../assets/${project.picture}`)}
              alt="Projets"
              width="540"
              height="240"
            />    
            
          </div>
          <div className="middle" >
            <div className="cardTitle">{project.title}</div>
              <div className="cardDescription">{project.description}</div>
              <div className="cardtechnologies">
              {technologies.map((technology) => (
                <div key={technology.id}>
                  <img
                    className="cardtechnology"
                    src={require(`../../assets/${technology.picture}`)}
                    alt="Technologies"
                    width="30"
                    height="30"
                    title={technology.title}
                  />
                </div>      
              ))}
              </div>
              <div className="linksDiv">
                {project.code && (
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                  <img src={require("../../assets/github.webp")} alt="Lien GitHub" width="30" height="30" title="Vers le code source"/>
                </a>
                )}
                {project.site && (
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                  <img src={require("../../assets/booki_ico.PNG")} alt="Lien vers le site web" width="70" height="30" title="Vers le site web"/>
                </a>
                )}
              </div>
            </div>   

          <div className="right" > 
            <Slideshow selHousing={project} />           
          </div>
        </div>
       
        );
      })}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

Card.defaultProps = {
  title: "",
};

export default Card;


/*import "./card.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import Projects from "../../datas/projects.json";
import Technos from "../../datas/technologies.json";
import Modal from "../../components/Modal";

function Card() {
  const [projectState] = useState(Projects);
  const [technoState] = useState(Technos);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (projectId) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="cardContainer">
      {projectState.projects.map((project) => {
        const technologies = project.technos.map((technoId) =>
          technoState.technologies.find((tech) => tech.id === technoId)
        );
        const isProjectSelected = selectedProject === project.id;

        return (
          <div key={project.id + 1000}>
            <div
              className={`cardFigure ${isProjectSelected ? "selected" : ""}`}
              onClick={() => handleCardClick(project.id)}
            >
              <img
                className="cardImg"
                src={require(`../../assets/${project.picture}`)}
                alt="projet"
                width="400"
                height="340"
              />
              <div className="cardDescription">{project.description}</div>
              <div className="cardtechnologies">
                {technologies.map((technology) => (
                  <div key={technology.id}>
                    <img
                      className="cardtechnology"
                      src={require(`../../assets/${technology.picture}`)}
                      alt="Technologies"
                      width="30"
                      height="30"
                      title={technology.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {isModalOpen && isProjectSelected && (
              <div className="modal">
                <Modal selHousing={project} key={project.id} onCloseModal={handleCloseModal} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};

Card.defaultProps = {
  title: "",
};

export default Card;

*/


/*import "./card.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import Slideshow from "../Slideshow";
import Projects from "../../datas/projects.json";
import Technos from "../../datas/technologies.json";
import React from 'react';

function Card() {
  const [projectState] = useState(Projects);
  const [technoState] = useState(Technos);
 
  return (
    <div className="cardContainer" >
      {projectState.projects.map((project) => {
        const technologies = project.technos.map((technoId) =>
          technoState.technologies.find((tech) => tech.id === technoId)
        );
        return (
        <div className="card" key={project.id}>
          <div className="" >
            <img
              className="cardImg"
              src={require(`../../assets/${project.picture}`)}
              alt="Projets"
              width="350"
              height="350"
            />              
          </div>
          <div className="" >
          <div className="cardTitle">{project.title}</div>
            <div className="cardDescription">{project.description}</div>
            <div className="cardtechnologies">
            {technologies.map((technology) => (
              <div key={technology.id}>
                <img
                  className="cardtechnology"
                  src={require(`../../assets/${technology.picture}`)}
                  alt="Technologies"
                  width="30"
                  height="30"
                  title={technology.title}
                />
              </div>      
            ))}
            </div>
          </div>/*
          <div className="right"> 
            <Slideshow selHousing={project} />           
          </div>
        </div>
       
        );
      })}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

Card.defaultProps = {
  title: "",
};

export default Card;*/
