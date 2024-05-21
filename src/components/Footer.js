import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div class="footer-container">
      <div class="icon-spacing">
        <a href="https://www.linkedin.com/in/val-wong/"><img class="logo" src={process.env.PUBLIC_URL + '/linkedin.png'} alt="black linkedin logo"/></a>
        <a href="https://github.com/vwong031"><FaGithub className="logo" alt="black github logo"/></a>
        <a href="mailto:vkwong825@gmail.com"><IoMdMail className="logo" alt="black mail icon"/></a>
      </div>
    </div>
  );
}

export default Footer;
