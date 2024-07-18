import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../style/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,  
    });
  }, []);

  return (
    <div className="about">
      <h1>About Me</h1>
      <p>My name is <span>Nawaz Danish</span>, and I proudly wear multiple hats as a professional Intraday Trader, Investor, and Web Developer. My journey to this point has been filled with learning, growth, and the pursuit of diverse interests. Allow me to share my story in more detail.</p>
      <p>From a young age, I was always fascinated by technology and the endless possibilities it presented. Growing up in the picturesque district of Uttar Dinajpur in West Bengal, India, I spent countless hours exploring the internet, dabbling with coding, and dreaming of a future where I could create something impactful. This early interest set the foundation for my career in web development.</p>
      <p>However, before I ventured into the world of coding and development, I embarked on a different path. I ran a photography shop, which was not just a business but a passion project. Photography allowed me to capture moments, tell stories, and connect with people in a unique way. Each photograph was a piece of art, and I took pride in delivering quality work that brought joy to my clients. The experience of running a photography shop taught me valuable lessons in customer service, business management, and the importance of creativity in one{"'"}s work.</p>
      <p data-aos="fade-up">Despite my love for photography, I knew I wanted to explore my interest in technology further. This led me to pursue higher education at Kalinga University in Raipur. In 2017, I graduated with a degree that provided me with a strong foundation in various aspects of technology and business. My time at Kalinga University was transformative, as it equipped me with the knowledge and skills necessary to navigate the fast-evolving tech landscape. The university not only imparted technical know-how but also fostered critical thinking and problem-solving abilities.</p>
      <p data-aos="fade-up">Post-graduation, I delved into the world of web development. The field allowed me to merge my creative inclinations with technical expertise. I enjoyed the process of building websites, designing user interfaces, and ensuring seamless user experiences. Web development, to me, is like crafting a digital masterpiece where each line of code contributes to the bigger picture. It{"'"}s a field that constantly evolves, and keeping up with the latest trends and technologies is both challenging and rewarding.</p>
      <p data-aos="fade-up">While web development was my primary focus, I also found myself drawn to the financial markets. The dynamic nature of trading and investing intrigued me. The idea of making informed decisions, analyzing market trends, and navigating the highs and lows of the stock market was exhilarating. Thus, I ventured into intraday trading and investing.</p>
      <p data-aos="fade-up">As an Intraday Trader, I engage in the buying and selling of financial instruments within the same trading day. This requires a keen understanding of market movements, quick decision-making skills, and the ability to manage risks effectively. Intraday trading is not for the faint-hearted; it demands discipline, constant learning, and a deep understanding of market psychology. My analytical skills honed during my web development days proved to be invaluable in this high-pressure environment.</p>
      <p data-aos="fade-up">Investing, on the other hand, is a more long-term approach where I allocate capital to various assets with the expectation of future returns. It requires a different mindset compared to trading. Patience, research, and a sound understanding of financial markets are crucial. I diversify my investments across different asset classes, including stocks, bonds, and real estate, to mitigate risks and maximize returns. Investing is a journey that involves continuous learning and adapting to market changes.</p>
      <p data-aos="fade-up">Balancing my roles as an Intraday Trader, Investor, and Web Developer is both challenging and fulfilling. Each discipline offers unique experiences and requires distinct skill sets. However, the common thread that ties them together is the need for continuous learning, adaptability, and a passion for excellence.</p>
      <p data-aos="fade-up">Intraday trading teaches me to stay calm under pressure and make swift, informed decisions. Investing helps me think long-term, plan strategically, and be patient in achieving my financial goals. Web development fuels my creativity, problem-solving abilities, and attention to detail. Together, these roles complement each other and contribute to my overall growth as a professional.</p>
      <p data-aos="fade-up">Living in Uttar Dinajpur, West Bengal, I am deeply connected to my roots. The district{"'"}s serene environment and close-knit community have shaped my values and work ethic. Despite the fast-paced nature of my professions, I find solace in the simplicity and beauty of my hometown. It{"'"}s a place that keeps me grounded and reminds me of the importance of staying true to oneself.</p>
      <p data-aos="fade-up">As I continue my journey, I am excited about the endless possibilities that lie ahead. The world of technology and finance is constantly evolving, and I am committed to staying at the forefront of these changes. Whether it{"'"}s exploring new coding languages, adopting innovative trading strategies, or identifying lucrative investment opportunities, I am driven by the desire to learn, grow, and make a positive impact.</p>
      <p data-aos="fade-up">In conclusion, I am Nawaz Danish, a multifaceted professional with a passion for Intraday Trading, Investing, and Web Development. My journey from running a photography shop to graduating from Kalinga University and pursuing diverse career paths has been nothing short of exhilarating. Each experience has contributed to my growth and shaped me into the person I am today. I look forward to continuing this journey, embracing new challenges, and achieving greater heights in my professional endeavors while staying connected to my roots in Uttar Dinajpur, West Bengal, India.</p>
    </div>
  );
}

export default About;