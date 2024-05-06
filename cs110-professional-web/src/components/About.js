import './About.css'

function About() {
  return (
    <div id="About" class="about-container">
      <h2 class="about-title">
        About
      </h2>
      <div class="about-section">
        <p class="background">Background: I am proficient in C++, Python, HTML, CSS, and Javascript. Most of my
          project experience has been with web development, however, I also have experience with
          embedded systems, operating systems, and software engineering. Additionally,
          I have some experience with UI/UX and with using figma.
        </p>
        <br />

        <p class="cs-interests">Computer Science Interests: I am interested in web development,
          embedded systems, compilers, and software programming/engineering.
        </p>
        <br />
        
        <p class="interests">Outside Interests/Hobbies: Outside of computer science, I enjoy being active! 
          I love to do any type of workouts (weightlifting, cardio, sports, hiking, etc). 

          Additionally, I have recently gotten into gaming and enjoy playing 
          video games with friends in my free time. 

          I also love to read as well as hang out with friends and family.
        </p>
        <br />
        
        <p class="career">Career Goals: 
          My goal with computer science is to one day work with companies like Pixar, 
          Dreamworks, Lucasfilm, or Walt Disney. I love the idea of being able to combine 
          tech and film! I grew up watching TV and movies all the time as well as playing 
          video games, so working in the film industry would be a dream come true.
          I also have taken an interest in web development and design, so I'd love 
          to combine these passions and delve into the marketing, graphic design, and tech world.
        </p>
      </div>
      <a href={process.env.PUBLIC_URL + './Resume_New_Grad.pdf'} target="_blank" rel="noopener noreferrer">Link to Resume</a>
    </div>
  );
}

export default About;
