import React from 'react';
import './style.css'
import avatar from './male-avatar-profile-picture-vector-10211761 2.jpeg'

const All = () => {
    return (
        <div>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="./CSS/style.css" />
          <title>Jose Yanez's Portfolio</title>
          <header className="Header">
            <h1>Jose Yanez</h1>
            <nav>
              <ul>
                <li>
                  <a href="#AboutMe">About me</a>
                </li>
                <li>
                  <a href="#Work">Work</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
                <li>
                  <a href="./Resume/JoseYanez_ Resume.pdf" rel="noreferrer" target="_blank">Resume </a>
                </li>
              </ul>
            </nav>
          </header>
          <section className="Caption" alt="Caption Image">
            <img src={avatar} alt="Profile Avatar" width={250} height={250} />
            <div>
              <h2>This website was coded using html and css!</h2>
            </div>
          </section>
          <main className="EntireAboutWork">
            <article id="AboutME" className="AboutAsWhole">
              <h2>
                About me
              </h2>
              <p>
                Full Stack Web Developer bringing high energy and focus to each coding project. 
                Currently pursuing a certificate from the University of Denver Coding Bootcamp in Full Stack Web Development to further enhance my skill set.  
                Newly learned skills in HTML, CSS, and Javascript combined with high energy and focus allows for attention to detail 
                problem solving when coding in these areas. Able to grasp bigger picture ideas without losing sight of smaller aspects. 
                Highly competitive with a team mentality which enables leadership that ensures everyone involved is putting in maximum effort. 
                On each project I’ve worked on I am always looking to grasp the main goal while adding a personal touch to user experience. 
                I am currently working on using node.js in order to expand my list of coding skills. 
                I look forward to using my skills in a passionate team that values quality and innovation in order to build a unique user experience 
                on the web.
                <span>Please feel free to link any of the links in the Contact section of the page to reach out to me with any questions.</span>
              </p>
            </article>
            <section id="Work">
              <h2 className="WorkHeader">
                Work
              </h2>
              <section className="BoxesAsWhole">
                <a href="https://josey9087.github.io/SoundBites/" target="_blank" className="BiggerBox" alt="Project 1:SoundBites">
                  <span id="Link">SoundBites <br />Click to view my first project!<br /></span></a>
                <a href="https://josey9087.github.io/WorkDayScheduler/" target="_blank" className="SmallerBoxes" id="smallbox1" alt="WorkDayScheduler">
                  <section>
                    <h2>
                      WorkDay Scheduler
                    </h2>
                    <p>
                      Click to view!
                    </p>
                  </section>
                </a>
                <a href="https://josey9087.github.io/PasswordGenerator/" target="_blank" className="SmallerBoxes" id="smallbox2" alt="Password Generator">
                  <section>
                    <h2>
                      Password Generator
                    </h2>
                    <p>
                      Click to view!
                    </p>
                  </section>
                </a>
                <a href="https://dirt93873.herokuapp.com/" target="_blank" className="SmallerBoxes" id="smallbox3" alt="Dirt!">
                  <section>
                    <h2>
                      Dirt! : A page for plant enthusiasts
                    </h2>
                    <p>
                      Click to View!!
                    </p>
                  </section>
                </a>
                <section className="SmallerBoxes" alt="Coming Soon Image">
                  <section>
                    <h2>
                      Fifth Work
                    </h2>
                    <p>
                      Fifth Work Description
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </main>
          <footer>
            <h2 id="Contact">
              Contact <span>me</span>
            </h2>
            <nav className="Lower">
              <ul>
                <li>
                  <a href="720-982-9511">720-982-9511</a> 
                </li>
                <li>
                  <a href="https://github.com/Josey9087" target="_blank">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jose-yanez-b5bb70223" target="_blank">LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:yanezjose9087@gmail.com">Email Me</a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      )
}

export default All