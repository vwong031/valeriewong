import './Nav.css'
import { useRef } from 'react'

function Nav() {
  const navbarRef = useRef(null);
  const scrollOffset = 70;

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = navbarRef.current.clientHeight;
      const elementPosition = element.offsetTop - navbarHeight - scrollOffset;
      window.scrollTo({top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav ref={navbarRef} role="navigation" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="header">
          <div class="header-spacing">
            <div class="nav-elements">
              <button class="sections nav-link" onClick={() => scrollTo('Home')}>Home</button>
              <button class="sections nav-link" onClick={() => scrollTo('About')}>About</button>
              <button class="sections nav-link" onClick={() => scrollTo('Education')}>Education</button>
              <button class="sections nav-link" onClick={() => scrollTo('Experience')}>Experience</button>
              <button class="sections nav-link" onClick={() => scrollTo('Extracurriculars')}>Extracurriculars</button>
              <button class="sections nav-link">
                <a class="resume" href="https://drive.google.com/file/d/1htRPmB5ASRwflxx_rTdpacw8Soih042L/view?usp=sharing" >Resume</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
