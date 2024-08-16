import React, { useState, useEffect } from 'react';
import './Home.css';
import backgroundVideo from './video1.mp4';
import WatervQ from './waterv Q.jpg'; 
import Sms from './sms.jpeg';
import Data from './data.jpeg';

const Home = () => {
  const [quotes] = useState([
    "Water is the driving force of all nature. - Leonardo da Vinci",
    "Thousands have lived without love, not one without water. - W. H. Auden",
    "The water you touch in a river is the last of that which has passed, and the first of that which is to come. - Leonardo da Vinci",
    "When the well is dry, we know the worth of water. - Benjamin Franklin",
    "Water is life, and clean water means health. - Audrey Hepburn"
  ]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 2000); // Change quote every 2 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div>
      <div className="home-page">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="quote-container">
          <h1>Valuable Quotes about Water</h1>
          <div className="quote">{quotes[currentQuoteIndex]}</div>
        </div>
      </div>
      <div className="containers">
        <h2 className="subtitle">Unique Features</h2>
        <div className="worklist">
          <div className="work">
            <img src={Data} alt="Online Shopping app" />
            <div className="layer">
              <h3>Data Analysis</h3>
              <p>Passionate about creating a cutting-edge 
                web project focused on Random Number Generation! 
                Currently developing a dynamic and user-friendly Random Number Generator application that seamlessly 
                generates unpredictable and unbiased numbers.</p>
              <a href="#"><i className='bx bx-export'></i></a>
            </div>
          </div>
          <div className="work">
            <img src={WatervQ} alt="Online gaming app" /> 
            <div className="layer">
              <h3>pH Level</h3>
              <p>An online shopping web project is a digital 
                platform that enables users to browse and purchase
                products or services over the internet. It typically includes features such as product listings, search functionality, user accounts, shopping cart,
                secure payment processing, and order management.</p>
              <a href="#"><i className='bx bx-export'></i></a>
            </div>
          </div>
          <div className="work">
            <img src={Sms} alt="Online music app" />
            <div className="layer">
              <h3>SMS Feature</h3>
              <p> Currently leading an exciting web project, 
                a cutting-edge music app that aims to revolutionize
                the way we experience and discover music.Join me on this journey to create a seamless and 
                immersive platform for music enthusiasts worldwide</p>
              <a href="#"><i className='bx bx-export'></i></a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">see more</a>
      </div>
    {/* Below ser class for css */}
      <div className="ser">
        <div className="">
          <h1 className="subtitle">Our </h1>
          <h1 className="sub">Teams</h1>
          <div className="service-list">
            <div> {/*  */}
              <i className='bx bx-code-alt'></i>
              <h2>Harshini</h2>
              <p>Plays a pivotal role in fortifying our web platform for mapping water supply networks. With a strong foundation in backend technologies, Harshini diligently architects and optimizes the data processing and storage systems, ensuring seamless integration with the frontend for a comprehensive user experience. Harshini's meticulous approach to coding and problem-solving empowers the platform with reliability and scalability, driving efficiency in water resource management.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className='bx bxs-crop'></i>
              <h2>Dharani</h2>
              <p>Committed to crafting user-centric experiences that elevate our web platform for mapping water supply networks. With expertise in frontend technologies and a keen eye for detail, Dharani ensures seamless navigation, captivating data visualizations, and robust integration with backend systems, enhancing the efficiency of water resource management.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className='bx bxs-crop'></i>
              <h2>Subashini</h2>
              <p>Dedicated to revolutionizing urban water management systems through innovative solutions. With a focus on sensor deployment, data analysis, and user-centric design, she plays a pivotal role in developing our web/mobile tool for mapping water supply networks, addressing challenges such as undetected leakages, breakages, and water quality monitoring.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className='bx bxs-crop'></i>
              <h2>Lingeshwaran</h2>
              <p>Diligent Testing and Verification Engineer dedicated to ensuring software reliability and quality. With a strong background in engineering and meticulous attention to detail, I drive project success through precise testing strategies and proactive problem-solving.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className='bx bxl-java'></i>
              <h2>Sekar</h2>
              <p>Diligent Embedded Systems Engineer specializing in water resource management tools. Through meticulous hardware integration, software development, and data analysis, I ensure reliability and efficiency. Committed to proactive problem-solving for resilient, sustainable urban water systems.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      
      <section class="tile">
        <h1 class="t">Get In Touch</h1>
        <div class="contact-container">
          <div class="contact-form">
            <h2 class="contact">Contact Us</h2>
            <form>
              <label for="name">Your Name:</label>
              <input type="text" id="name" name="name" required />

              <label for="email">Your Email:</label>
              <input type="email" id="email" name="email" required />

              <label for="message">Your Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div class="contact-info">
            <h2 class="h2">Information</h2>
            <p>Email: 2k21cse048@kiot.ac.in</p>
            <p>Phone:7418177918 </p>
            <p>Address: kiot,salem</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;