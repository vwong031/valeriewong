import './Education.css'

function Education() {
  return (
    <div id="Education" class="education-container">
      <h2 class="education-title">
        Education
      </h2>
      <div class="education">
        <div class="college">
          <div class="school-and-major">
            <strong>University of California, Riverside</strong> - B.S. Computer Science
            <div class="certifications">
              <i>Certifications: </i>
            </div>
            <div class="relevant-coursework">
              <i>Relevant Coursework:</i> CS110 - Intro to Web Development,
              CS130 - Computer Graphics,
              CS152 - Compiler Design,
              CS179J - Project in Computer Architecture and Embedded Systems
              CS120B - Intro to Embedded Systems
            </div>
            <div class="technical-skills">
              <i>Technical Skills: </i> 
              <ul>
                <li>
                  Languages: C++, Python, HTML, CSS, Javascript
                </li>
              </ul>
            </div>
            <div class="software">
              <i>Software: </i>
              VSCode, Arduino IDE, QT Creator
            </div>
          </div>
        </div>
        <div class="high-school">
          <strong>Mercy High School, Burlingame</strong> - High School Diploma
        </div>
      </div>

    </div>
  );
}

export default Education;
