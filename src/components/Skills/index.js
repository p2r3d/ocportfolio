import './skills.scss'

function Skills() {
  return (
    <section id="skills" className='skillsSection'>
      <h2>Compétences</h2>
      <div className='skillsDiv'>
        <div class="colDiv">
          <h3>Front-end</h3>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>Javascript</li>
            <li>React JS</li>         
          </ul>
        </div>
        <div class="colDiv">
          <h3>Back-end</h3>
          <ul>
            <li>Node js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div class="colDiv">
          <h3>Outils</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Github</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Skills;