import './Experience.css'

function Experience() {
  return (
    <div id="Experience" class="experience-container">
      <h2 class="experience-title">
        Experience
      </h2>
      <div className="experience-content">
        {/* <div class="work"> */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Work</p>
            </div>
            <div className="card-back">
              <div className="work">
                <div className="work-title">
                  Junior Software Engineer
                  <div className="position">ARTR</div>
                  <div className="date">(Aoril 2024 - Present)</div>
                </div>
                <div className="work-content">
                  <ul>
                    <li>Co-lead the web platform development for design optimization</li>
                    <li>Participate in rapid prototyping and UI driven development with continuous user feedback loop</li>
                    <li>Develop the scalable cloud platform for end-to-end design</li>
                  </ul>
                </div>
              </div>
              <div className="work">
                <div className="work-title">
                  UCR, Information Technology Solutions
                  <div className="position">
                    ITS Help Desk Student Assistant
                  </div>
                  <div className="date">(March 2023 - Present)</div>
                </div>
                <div className="work-content">
                  <ul>
                    <li>Provide campus support to faculty, staff and students via phone as part of the campus Information Technology Solutions (ITS) Tier 1 Helpdesk</li>
                    <li>Provide technical information/support when possible to students and staff</li>
                    <li>Maintain accurate records of technical issues, resolutions, and user interactions</li>
                  </ul>
                </div>
              </div>
              <a class="resume" href="https://www.linkedin.com/in/val-wong/" target="_blank" rel="noopener noreferrer">View my linkedin for more!</a>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <div class="projects"> */}
        <div class="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Projects</p>
            </div>
            <div className="card-back">
              <div className="projects">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="certifications">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p>Certifications</p>
              </div>
              <div className="card-back">
                <div className="coursera">
                  <u>Coursera:</u>
                  <ul className="bullet-points">
                    <li>Introduction to Front-End Development</li>
                    <li>SQL for Data Science</li>
                    <li>Foundations: Data, Data, Everywhere</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
