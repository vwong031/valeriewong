import './Education.css'
import './About.css'

function Education() {
  return (
    <div id="Education" class="education-container">
      <h2 class="education-title">
        Education
      </h2>
      <div class="education">
        <div class="college">
          <div class="school-and-major">
            <strong class="school">University of California, Riverside</strong> 
            <br/>
            <i class="degree">B.S. Computer Science</i>

            <div class="education-content">
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <p>Relevant Coursework</p>
                  </div>
                  <div class="card-back">
                    <div className="classes">
                      <div className="class">
                        <div className="title">
                          Introduction to Web Development
                        </div>
                        <div className="code">
                          CS110
                        </div>
                      </div>
                      <div className="class">
                        <div className="title">
                          Computer Graphics
                        </div>
                        <div className="code">
                          CS130
                        </div>
                      </div>
                      <div className="class">
                        <div className="title">
                          Compiler Design
                        </div>
                        <div className="code">
                          CS152
                        </div>
                      </div>
                      <div className="class">
                        <div className="title">
                          Project in Computer Architecture and Embedded Systems
                        </div>
                        <div className="code">
                          CS179J
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <p>Technical Skills</p>
                  </div>
                  <div class="card-back">
                    <div className="classes"> 
                      <div className="class">
                        <div className="title">
                          Languages
                        </div>
                        <div className="code">
                          C++
                        </div>
                        <div className="code">
                          Python
                        </div>
                        <div className="code">
                          HTML
                        </div>
                        <div className="code">
                          CSS
                        </div>
                        <div className="code">
                          Javascript
                        </div>
                      </div>
                      <div className="class">
                        <div className="title">
                          Frameworks
                        </div>
                        <div className="code">
                          React.js
                        </div>
                        <div className="code">
                          Node.js
                        </div>
                      </div>
                      <div className="class">
                        <div className="title">
                          Databases
                        </div>
                        <div className="code">
                          MongoDB
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <p>Software</p>
                  </div>
                  <div class="card-back">
                    <div className="classes">
                      <div className="class">
                        <div className="title">Arduino IDE</div>
                      </div>
                      <div className="class">
                        <div className="title">QT Creator</div>
                      </div>
                      <div className="class">
                        <div className="title">VSCode</div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            

          </div>
        </div>
        <div class="high-school">
          <strong class="school">Mercy High School, Burlingame</strong>
          <br/>
          <i class="degree">High School Diploma</i>
        </div>
      </div>

    </div>
  );
}

export default Education;
