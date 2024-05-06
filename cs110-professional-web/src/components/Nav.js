import './Nav.css'
import { useState } from 'react'

function Nav() {
  // const [scrollToSection, setScrollToSection] = useState(null);

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
              <button class="sections nav-link" onClick={() => scrollTo('Home')}>Home</button>
              {/* <a class="sections nav-link" onClick={() => scrollTo('Profile')} href="#">Profile</a> */}
              <button class="sections nav-link" onClick={() => scrollTo('About')}>About</button>
              <button class="sections nav-link" onClick={() => scrollTo('Education')}>Education</button>
              <button class="sections nav-link" onClick={() => scrollTo('Experience')}>Experience</button>
              <button class="sections nav-link" onClick={() => scrollTo('Extracurriculars')}>Extracurriculars</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
