import './Nav.css';
import { useRef } from 'react';

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
      <nav ref={navbarRef} role="navigation" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="header">
          <div className="header-spacing">
            <div className="nav-elements">
              <button className="sections nav-link barlow-bold" onClick={() => scrollTo('Home')}>Home</button>
              <button className="sections nav-link barlow-bold" onClick={() => scrollTo('About')}>About</button>
              <button className="sections nav-link barlow-bold" onClick={() => scrollTo('Education')}>Education</button>
              <button className="sections nav-link barlow-bold" onClick={() => scrollTo('Experience')}>Experience</button>
              <button className="sections nav-link barlow-bold" onClick={() => scrollTo('Extracurriculars')}>Extracurriculars</button>
              <button className="sections nav-link barlow-bold">
                <a className="resume" href="https://drive.google.com/file/d/1htRPmB5ASRwflxx_rTdpacw8Soih042L/view?usp=sharing" >Resume</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
