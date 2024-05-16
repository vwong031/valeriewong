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
                    <ul>
                      <li>CS110 - Intro to Web Development</li>
                      <li>CS130 - Computer Graphics</li>
                      <li>CS152 - Compiler Design</li>
                      <li>CS179J - Project in Computer Architecture and Embedded Systems</li>
                      <li>CS120B - Intro to Embedded Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <p>Technical Skills</p>
                  </div>
                  <div class="card-back">
                    <ul>
                      <li>
                        Languages: C++, Python, HTML, CSS, Javascript
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <p>Software</p>
                  </div>
                  <div class="card-back">
                    VSCode, Arduino IDE, QT Creator
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
