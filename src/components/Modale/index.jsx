import React from "react";
import "./modale.scss";
import { useState } from "react";
import Slideshow from "../Slideshow";
import Technos from "../../datas/technologies.json";

function Modale({ project, onCloseModal }) {
  const handleCloseClick = () => { onCloseModal(); };
  const [technoState] = useState(Technos);

  const technologies = project.technos.map((technoId) =>
    technoState.technologies.find((tech) => tech.id === technoId)
  );
  return (

          <div key={project.id} className="modal">
            <div className="modalContent">
              <button onClick={handleCloseClick} className="modalCloseBtn" >X</button>
              <h2 className="modalTitle">{project.title}</h2>
              <p className="modalDescription">{project.description}</p>
              <Slideshow selHousing={project} />
              <div className="cardTechnologies">
                {technologies.map((technology) => (
                  <div key={technology.id}>
                    <img
                    className="cardTechnology"
                    src={require(`../../assets/technoImages/${technology.picture}`)}
                    alt="Technologies"
                    width="50"
                    height="50"
                    title={technology.title}
                  />
            </div>
          ))}
                </div>
                <div className="linksDiv">
                  {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <img 
                    className="cardTechnology"
                    src={require("../../assets/technoImages/github.webp")} 
                    alt="Lien GitHub" 
                    width="30" height="30" 
                    title="Vers le code source"/>
                  </a>
                  )}
                  {project.site && (
                  <a href={project.site} target="_blank" rel="noopener noreferrer">
                    <img 
                      className="cardTechnology"
                      src={require("../../assets/projectImages/booki_ico.PNG")} 
                      alt="Lien vers le site web" 
                      width="70" height="30" 
                      title="Vers le site web"/>
                  </a>
                  )}
                </div>
              </div> 
          </div>
        );
      }
export default Modale;
