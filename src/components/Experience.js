import './Experience.css';

function Experience() {
  return (
    <div id="Experience" class="experience-container">
      <h2 class="experience-title barlow-bold">
        Experience
      </h2>
      <div className="experience-content">
        <div className="card">
          <div className="card-inner">
            <div className="card-front barlow-bold">
              <p>Work</p>
            </div>
            <div className="card-back">
              <div className="work">
                <div className="work-title barlow-bold">
                  Junior Software Engineer
                  <div className="position barlow-regular-italic">ARTR</div>
                  <div className="date barlow-regular-italic">(Apr 2024 - Present)</div>
                </div>
              </div>
              <div className="work">
                <div className="work-title barlow-bold">
                  UCR, Information Technology Solutions
                  <div className="position barlow-regular-italic">
                    ITS Help Desk Student Assistant
                  </div>
                  <div className="date barlow-regular-italic">(Mar 2023 - Present)</div>
                </div>
              </div>
              <button class="barlow-bold button"><a class="button linked-in" href="https://www.linkedin.com/in/val-wong/details/experience/" target="_blank" rel="noopener noreferrer">Details</a></button>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="card-inner">
            <div className="card-front barlow-bold">
              <p>Projects</p>
            </div>
            <div className="card-back">
              <div className="projects">
                <div className="work">
                  <div className="work-title barlow-bold">
                    Designathon Software Engineer
                  </div>
                  <div class="position barlow-regular-italic">
                    Design at UCR
                  </div>
                  <div className="date barlow-regular-italic">
                    (Oct 2023 - Jan 2024)
                  </div>
                </div>
                <div className="work">
                  <div className="work-title barlow-bold">
                    Driver Interface and Telemetry Engineer
                  </div>
                  <div className="position barlow-regular-italic">
                    UCR Solar Car
                  </div>
                  <div className="date barlow-regular-italic">
                    (Jul 2022 - May 2023)
                  </div>
                </div>
                <div className="work">
                  <div className="work-title barlow-bold">
                    Space Invaders -- Simplified Version
                  </div>
                  <div className="position barlow-regular-italic">
                    Embedded Systems Class Project
                  </div>
                  <div className="date barlow-regular-italic">
                    (Oct 2022 - Dec 2022)
                  </div>
                </div>
                <button class="barlow-bold button"><a class="button linked-in" href="https://www.linkedin.com/in/val-wong/details/experience/" target="_blank" rel="noopener noreferrer">Details</a></button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front barlow-bold">
              <p>Certifications</p>
            </div>
            <div className="card-back">
              <div className="coursera">
                <div className="work">
                  <div className="work-title barlow-bold">
                    Introduction to Front-End Development
                  </div>
                  <div className="position barlow-regular-italic">
                    Coursera
                  </div>
                  <div className="date barlow-regular-italic">Issued Aug 2023</div>
                </div>
                <div className="work">
                  <div className="work-title barlow-bold">
                    SQL for Data Science
                  </div>
                  <div className="position barlow-regular-italic">
                    Coursera
                  </div>
                  <div className="date barlow-regular-italic">Issued Jul 2023</div>
                </div>
                <div className="work">
                  <div className="work-title barlow-bold">
                    Foundations: Data, Data, Everywhere
                  </div>
                  <div className="position barlow-regular-italic">
                    Coursera
                  </div>
                  <div className="date barlow-regular-italic">Issued Jun 2023</div>
                </div>
                <button class="barlow-bold button"><a class="button linked-in" href="https://www.linkedin.com/in/val-wong/details/certifications/" target="_blank" rel="noopener noreferrer">Details</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
