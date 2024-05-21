import './Education.css'
import './About.css'

function Education() {
  return (
    <div id="Education" class="education-container">
      <h2 class="education-title barlow-bold">
        Education
      </h2>
      <div class="education">
        <div class="college">
          <div class="school-and-major">
            <strong class="barlow-bold school">University of California, Riverside</strong> 
            <br/>
            <i class="degree barlow-regular-italic">B.S. Computer Science</i>

            <div class="education-content">
              <div class="card">
                <div class="card-inner">
                  <div class="card-front barlow-bold">
                    <p className="background">Relevant Coursework</p>
                  </div>
                  <div class="card-back">
                    <div className="classes">
                      <div className="class">
                        <div className="title barlow-bold">
                          Introduction to Web Development
                        </div>
                        <div className="code barlow-regular-italic">
                          CS110
                        </div>
                      </div>
                      <div className="class">
                        <div className="title barlow-bold">
                          Computer Graphics
                        </div>
                        <div className="code">
                          CS130
                        </div>
                      </div>
                      <div className="class">
                        <div className="title barlow-bold">
                          Compiler Design
                        </div>
                        <div className="code">
                          CS152
                        </div>
                      </div>
                      <div className="class">
                        <div className="title barlow-bold">
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
                  <div class="card-front barlow-bold">
                    <p className="background">Technical Skills</p>
                  </div>
                  <div class="card-back">
                    <div className="classes"> 
                      <div className="class">
                        <div className="title barlow-bold">
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
                        <div className="title barlow-bold">
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
                        <div className="title barlow-bold">
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
                  <div class="card-front barlow-bold">
                    <p className="background">Software</p>
                  </div>
                  <div class="card-back">
                    <div className="classes">
                      <div className="class">
                        <div className="title barlow-bold">Arduino IDE</div>
                      </div>
                      <div className="class">
                        <div className="title barlow-bold">QT Creator</div>
                      </div>
                      <div className="class">
                        <div className="title barlow-bold">VSCode</div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            

          </div>
        </div>
        <div class="high-school">
          <strong class="school barlow-bold">Mercy High School, Burlingame</strong>
          <br/>
          <i class="degree barlow-regular-italic">High School Diploma</i>
        </div>
      </div>

    </div>
  );
}

export default Education;
