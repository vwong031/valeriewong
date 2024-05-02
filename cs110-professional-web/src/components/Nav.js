import './Nav.css'
import { useState } from 'react'

function Nav() {
  const [scrollToSection, setScrollToSection] = useState(null);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav role="navigation" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="header">
          <div class="header-spacing">
            <div class="nav-elements">
              <a class="sections nav-link" onClick={() => scrollTo('Home')} href="#">Home</a>
              <a class="sections nav-link" onClick={() => scrollTo('Profile')} href="#">Profile</a>
              <a class="sections nav-link" onClick={() => scrollTo('About')} href="#">About</a>
              <a class="sections nav-link" onClick={() => scrollTo('Education')} href="#">Education</a>
              <a class="sections nav-link" onClick={() => scrollTo('Experience')} href="#">Experience</a>
              <a class="sections nav-link" onClick={() => scrollTo('Extracurriculars')} href="#">Extracurriculars</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
