import "../style/Home.css";
import Img from "/nawaz.jpg";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {

  return (
    <div className="home">
      <div className="img">
        <img loading="lazy" src={Img} alt="Nawaz Danish" />
      </div>
      <h1>Nawaz Danish</h1>
      <p className="description">
        I am a professional Web Developer, Intraday Trader & Investor. 
        I previously ran a  photocopy shop.
        I graduated from Kalinga University, Raipur, in 2017. 
        I am from West Bengal district of Uttar {"(North)"} Dinajpur, India.
      </p>
      <div className="social-icons">
        <a href="https://www.instagram.com/nawazdanish1996" target="blank" className="social-icon"><FaInstagram /></a>
        <a href="https://github.com/nawazdanish1996" target="blank" className="social-icon"><FaGithub /></a>
      </div>
    </div>
  );
};

export default Home;

export default Home
