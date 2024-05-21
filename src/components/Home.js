import './Home.css';
// import React, { useEffect, useState } from "react";

function Home() {
  // const [typedText, setTypedText] = useState("");
  // const [isTyping, setIsTyping] = useState(true);

  // const text = "Hi, I'm Valerie Wong"
  
  // useEffect(() => {
  //   let index = 0;
  //   let typeInterval;

  //   const type = () => {
  //     typeInterval = setInterval(() => {
  //     if (index < text.length) {
  //       setTypedText((prev) => prev + text.charAt(index));
  //       ++index;
  //     }
  //     else {
  //       clearInterval(type);
  //       setIsTyping(false);
  //     }
  //     }, 75);
  //   };

  //   type();

  //   const resetTyping = setInterval(() => {
  //     setTypedText("");
  //     setIsTyping(true);
  //     index = 0;
  //     type();
  //   }, 15000);

  //   return () => {
  //     clearInterval(typeInterval);
  //     clearInterval(resetTyping);
  //   };
  // }, []);
  
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
            Hi, I'm Valerie Wong!
          </div>
          <div className="description">
            I am a fourth year computer science student at the University of California, Riverside.
            I am currently working as an ITS Helpdesk Assistant for UCR Information
            Technology Solutions and am a part time junior software engineer for Artr.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
