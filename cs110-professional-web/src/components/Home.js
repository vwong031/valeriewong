import './Home.css';
// import headshot from 'C:/Users/vkwon/OneDrive/Desktop/code/CS110/cs110-professional-website/cs110-professional-web/public/hs-headshot.jpg';

function Home() {
  return (
    <div id="Home">
      <div class="container">
        <img class="profile-img" src={process.env.PUBLIC_URL + '/hs-headshot.jpg'} alt="Headshot of Valerie Wong. She has long black hair and is wearing a black off the shoulder top."/>
        <div class="name-and-description">
          <div class="name">
            Valerie Wong
          </div>
          <div class="description">
            Hello! I am a fourth year computer science student at the University of California, Riverside.
            I am currently working as an ITS Helpdesk Assistant for UCR Information
            Technology Solutions and am a part time junior software engineer for Artr.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
