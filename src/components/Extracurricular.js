import './Extracurricular.css'

function Extracurricular() {
  return (
    <div id="Extracurriculars" class="extra-container">
      <h2 className="extra-title barlow-bold">
        Extracurriculars
      </h2>

      <div className="extra-content">
        <div className="card">
          <div className="card-inner">
            <div className="card-front barlow-bold">
              <p>Clubs</p>
            </div>
            <div className="card-back">
              <div className="clubs">
                <div className="club">
                  <div className="title barlow-bold">Katipunan PSO</div>
                  <div className="org barlow-regular-italic">UCR</div>
                </div>
                <div className="club">
                  <div className="title barlow-bold">Association for Computing Machinery (ACM)</div>
                  <div className="org barlow-regular-italic">UCR</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front barlow-bold">
              <p>Interests</p>
            </div>
            <div className="card-back">
              <div className="clubs">
                <div className="title club barlow-bold">Design</div>
                <div className="title club barlow-bold">Health & Wellness</div>
                <div className="title club barlow-bold">Fitness</div>
                <div className="title club barlow-bold">Nutrition</div>
                <div className="title club barlow-bold">Psychology</div>
                <div className="title club barlow-bold">Reading</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front barlow-bold">
              <p>Volunteer</p>
            </div>
            <div className="card-back">
              <div className="clubs">
                <div className="title barlow-bold">
                  Pacific Beach Coalition
                </div>
                <div className="org barlow-regular-italic">
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
