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
                  <div className="date">(Apr 2024 - Present)</div>
                </div>
              </div>
              <div className="work">
                <div className="work-title">
                  UCR, Information Technology Solutions
                  <div className="position">
                    ITS Help Desk Student Assistant
                  </div>
                  <div className="date">(Mar 2023 - Present)</div>
                </div>
              </div>
              <button class="button"><a class="linked-in" href="https://www.linkedin.com/in/val-wong/details/experience/" target="_blank" rel="noopener noreferrer">Details</a></button>
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
                <div className="work">
                  <div className="work-title">
                    Designathon Software Engineer
                  </div>
                  <div class="position">
                    Design at UCR
                  </div>
                  <div className="date">
                    (Oct 2023 - Jan 2024)
                  </div>
                </div>
                <div className="work">
                  <div className="work-title">
                    Driver Interface and Telemetry Engineer
                  </div>
                  <div className="position">
                    UCR Solar Car
                  </div>
                  <div className="date">
                    (Jul 2022 - May 2023)
                  </div>
                </div>
                <div className="work">
                  <div className="work-title">
                    Space Invaders -- Simplified Version
                  </div>
                  <div className="position">
                    Embedded Systems Class Project
                  </div>
                  <div className="date">
                    (Oct 2022 - Dec 2022)
                  </div>
                </div>
                <button class="button"><a class="linked-in" href="https://www.linkedin.com/in/val-wong/details/experience/" target="_blank" rel="noopener noreferrer">Details</a></button>
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
                  <div className="work">
                    <div className="work-title">
                      Introduction to Front-End Development
                    </div>
                    <div className="position">
                      Coursera
                    </div>
                    <div className="date">Issued Aug 2023</div>
                  </div>
                  <div className="work">
                    <div className="work-title">
                      SQL for Data Science
                    </div>
                    <div className="position">
                      Coursera
                    </div>
                    <div className="date">Issued Jul 2023</div>
                  </div>
                  <div className="work">
                    <div className="work-title">
                      Foundations: Data, Data, Everywhere
                    </div>
                    <div className="position">
                      Coursera
                    </div>
                    <div className="date">Issued Jun 2023</div>
                  </div>
                  <button class="button"><a class="linked-in" href="https://www.linkedin.com/in/val-wong/details/certifications/" target="_blank" rel="noopener noreferrer">Details</a></button>
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
