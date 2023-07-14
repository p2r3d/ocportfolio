import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';

import Projects from '../../datas/projects.json';

function Project() {
  // récup de l'id passé en paramètre dans l'url
  const {id}=useParams();
  const projectId=parseInt(id,10);
   // récup du projet associé à cet id
  const selectedProject = Projects.projects.find((project) => project.id === projectId);
  console.log("selectdeProject", selectedProject);
  if (selectedProject) {
    return (
      <div>
           {console.log("in")}
        <h1>ok !!!</h1>
        <Slideshow selHousing={selectedProject}/>
      </div>
    );
  }
else { return (
<div>
  {console.log("out")}
 
        <h1>NOT ok !!!</h1>
        
      </div>
)}
}
export default Project