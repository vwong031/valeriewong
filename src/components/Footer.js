import './Footer.css'

function Footer() {
  return (
    <div class="footer-container">
      <div class="icon-spacing">
        <a href="https://www.linkedin.com/in/val-wong/"><img class="logo" src={process.env.PUBLIC_URL + '/linkedin.png'} alt="black linkedin logo"/></a>
        <a href="https://github.com/vwong031"><img class="logo" src={process.env.PUBLIC_URL + '/github.jpg'} alt="black github logo"/></a>
        <a href="mailto:vkwong825@gmail.com"><img class="logo" src={process.env.PUBLIC_URL + '/mail.png'} alt="black mail icon"/></a>
      </div>
    </div>
  );
}

export default Footer;
