import './nav.scss'

function Nav() {
  return (
    <section className="navDiv">      
      <div className='logoDiv'>
        <a href="#" className='logo' >
          <img  src={require("../../assets/logo/avataaars.PNG")}  alt="logo" width="50" height="50"/>
        </a>
      </div>
      <nav className='navbar'>
        <a href="#" className="btn" >Accueil</a>
        <a href="#portfolio" className="btn" >Portfolio</a>
        <a href="#skills" className="btn" >Compétences</a>
        <a href="#contact" className="btn" >Contact</a>
      </nav>
    </section>
  )
}
export default Nav