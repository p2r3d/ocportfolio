import  { useState } from 'react';
import './aboutMe.scss'

function AboutMe() {
 
  const [showAdditionalText, setShowAdditionalText] = useState(false);
  const handleClick = () => {
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <section id="aboutme" className="aboutMe" onClick={handleClick}>
      <h2>À propos</h2>
      {showAdditionalText && <div><p className="visible">  Après une pause professionnelle dédiée à ma famille, 
      j’ai repris le chemin des technologies numériques en suivant une formation diplômante de Développeur Web chez Openclassrooms.
      </p>
      <p>Avec détermination et persévérance, j'ai ainsi acquis les compétences nécessaires pour devenir une développeuse web polyvalente, 
      utilisant les langages de programmation tels que HTML, CSS et JavaScript, 
      et explorant des frameworks populaires tels que React et Node.js.
      </p>
      <p>Ma fabuleuse expérience en tant que mère au foyer s’est enrichie du sens de l'organisation, 
      de la gestion du temps et de la résolution de problèmes 
      … atouts précieux dans le travail de développeur, où il s’agit de jongler entre les tâches, 
      de s’adapter, et de trouver des solutions créatives aux défis techniques.
      </p></div>}
      <p className="visible">La création de sites web interactifs et esthétiquement plaisants est un défi palpitant ; 
      PME, associations ou particuliers, je serai ravie de partager mes compétences et ma passion 
      pour le développement web en répondant à vos besoins de création de site Internet. </p>
      <button className="openTextBtn">...</button>    
    </section>
  )
}
export default AboutMe;