import './About.css';

function About() {
  return (
    <div id="About" class="about-container">
      <h2 class="barlow-bold about-title">
        About
      </h2>
      <div class="about-section">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <p class="background barlow-bold">Background </p>
            </div>
            <div class="card-back barlow-regular">
              I am proficient in C++, Python, HTML, CSS, and Javascript. Most of my
              project experience has been with web development, however, I also have experience with
              embedded systems, operating systems, and software engineering. Additionally,
              I have some experience with UI/UX and with using figma.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <p class="background barlow-bold">Computer Science Interests</p>
            </div>
            <div class="card-back barlow-regular">
              I am interested in web development, embedded systems, compilers, and software programming/engineering.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <p class="background barlow-bold">Outside Interests/Hobbies</p>
            </div>
            <div class="card-back barlow-regular">
              Outside of computer science, I enjoy being active! 
              I love to do any type of workouts (weightlifting, cardio, sports, hiking, etc). 

              Additionally, I have recently gotten into gaming and enjoy playing 
              video games with friends in my free time. 

              I also love to read as well as hang out with friends and family.
            </div>
          </div> 
        </div>
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <p class="background barlow-bold">Career Goals</p>
            </div>
            <div class="card-back barlow-regular">
              My goal with computer science is to one day work with companies like Pixar, 
              Dreamworks, Lucasfilm, or Walt Disney. I love the idea of being able to combine 
              tech and film! I grew up watching TV and movies all the time as well as playing 
              video games, so working in the film industry would be a dream come true.
              I also have taken an interest in web development and design, so I'd love 
              to combine these passions and delve into the marketing, graphic design, and tech world.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
