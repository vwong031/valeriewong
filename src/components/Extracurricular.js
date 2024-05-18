import './Extracurricular.css'

function Extracurricular() {
  return (
    <div id="Extracurriculars" class="extra-container">
      <h2 className="extra-title">
        Extracurriculars
      </h2>

      <div className="extra-content">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Clubs</p>
            </div>
            <div className="card-back">
              <div className="clubs">
                <div className="club">
                  <div className="title">Katipunan PSO</div>
                  <div className="org">UCR</div>
                </div>
                <div className="club">
                  <div className="title">Association for Computing Machinery (ACM)</div>
                  <div className="org">UCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Interests</p>
            </div>
            <div className="card-back">
              <div className="clubs">
                <div className="title club">Design</div>
                <div className="title club">Health & Wellness</div>
                <div className="title club">Fitness</div>
                <div className="title club">Nutrition</div>
                <div className="title club">Psychology</div>
                <div className="title club">Reading</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Volunteer</p>
            </div>
            <div className="card-back">
              <div className="clubs">
                <div className="title">
                  Pacific Beach Coalition
                </div>
                <div className="org">
                  Beach Clean Ups
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extracurricular;
