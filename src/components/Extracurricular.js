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
                <div className="club-names">Katipunan @ UCR, ACM @ UCR</div>
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
              <div className="interests">
                Design, Health & Wellness, Fitness, Nutrition, Psychology, Reading
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
              <div className="volunteer">
                Pacific Beach Coalition - Beach Clean Ups
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extracurricular;
