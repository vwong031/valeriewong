import './Home.css';
// import headshot from 'C:/Users/vkwon/OneDrive/Desktop/code/CS110/cs110-professional-website/cs110-professional-web/public/hs-headshot.jpg';

function Home() {
  return (
    <div>
      <div class="container">
        <img class="profile-img" src={process.env.PUBLIC_URL + '/hs-headshot.jpg'} alt="Headshot of Valerie Wong. She has long black hair and is wearing a black off the shoulder top."/>
        <div class="name-and-description">
          <div class="name">
            Valerie Wong
          </div>
          <div class="description">
            Hello! I am a fourth year computer science student at the University of California, Riverside.
            I enjoy web development, embedded systems, and anything design. I am currently
            looking more into UI/UX with hopes of becoming a UX Designer in
            the future.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
