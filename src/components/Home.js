import React from 'react';
import { ReactTyped } from 'react-typed';
import './Home.css';

function Home() {
  return (
    <div id="Home">
      <div className="container">
        <img 
        className="profile-img" 
        src={process.env.PUBLIC_URL + '/hs-headshot.jpg'} 
        alt="Headshot of Valerie Wong. She has long black hair and is wearing a black off the shoulder top."
        />
        <div className="name-and-description barlow-regular">
          <div className="name">
            <ReactTyped 
              strings={[
                "Hi, I'm Valerie Wong!",
              ]}
              typeSpeed={170}
              backSpeed={130}
              loop
            />
          </div>
          <div className="description">
            I am a 4th year computer science student at the University of California, Riverside.
            I am currently working as an ITS Helpdesk Assistant for UCR Information
            Technology Solutions and am a part time junior software engineer for Artr.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
