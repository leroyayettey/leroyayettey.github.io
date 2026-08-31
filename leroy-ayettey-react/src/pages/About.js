import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.main
      className="page-shell narrow-shell"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.section className="page-intro" variants={itemVariants}>
        <div className="about-intro-grid">
          <div>
            <p className="eyebrow">Profile</p>
            <h1>Driven by craft, curiosity, and a love for building.</h1>
            <p>
              I am a junior cloud engineer whose work is shaped by a genuine love for systems,
              problem-solving, and learning. I enjoy writing Java, building full-stack experiences,
              and designing AWS infrastructure that is practical, resilient, and easy to improve over time.
              To me, engineering is not just solving technical problems — it is creating something thoughtful,
              useful, and lasting.
            </p>
          </div>

          <div className="portrait-card" aria-label="Portrait of Leroy Ayettey">
            <img src="/IMG_8130.jpeg" alt="Leroy Ayettey portrait" />
          </div>
        </div>
      </motion.section>

      <motion.section className="content-panel" variants={itemVariants}>
        <div className="section-heading">
          <p className="eyebrow">Summary</p>
          <h2>What I bring</h2>
        </div>

        <div className="two-column-grid">
          <div>
            <p>
              My work is rooted in learning by doing: designing AWS infrastructure, automating
              repeatable deployments, and improving how systems are built and observed. I care about
              creating infrastructure that feels intentional, secure, and dependable — not just functional.
            </p>
          </div>
          <div>
            <p>
              I bring a strong foundation in Infrastructure as Code, Linux, cloud networking,
              and Git workflows, alongside Java, Spring Boot, MongoDB, and SQL experience. I love the
              connection between writing code and deploying resilient systems that people can trust.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="content-panel" variants={itemVariants}>
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technical capabilities</h2>
        </div>

        <div className="skill-columns">
          <div>
            <h3>Cloud platforms</h3>
            <ul>
              <li>AWS</li>
              <li>EC2</li>
              <li>VPC</li>
              <li>Application Load Balancer</li>
              <li>Auto Scaling</li>
              <li>IAM</li>
              <li>Systems Manager</li>
              <li>CloudWatch</li>
            </ul>
          </div>
          <div>
            <h3>Java & Full Stack</h3>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>Full Stack Development</li>
            </ul>
          </div>
          <div>
            <h3>IaC & DevOps</h3>
            <ul>
              <li>Terraform</li>
              <li>AWS CloudFormation</li>
              <li>YAML</li>
              <li>HCL</li>
              <li>AWS CLI</li>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>CI/CD Concepts</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section className="content-panel" variants={itemVariants}>
        <div className="section-heading">
          <p className="eyebrow">A Little More About Me</p>
          <h2>Passion beyond the screen</h2>
        </div>

        <div className="two-column-grid">
          <div>
            <p>
              Gaming has always been a big part of who I am. It taught me focus, patience,
              resilience, and how to stay calm under pressure — all qualities I carry into my work.
              I've long been interested in the world of esports, where discipline, teamwork, and strategy
              come together in a way that feels both competitive and inspiring.
            </p>
          </div>
          <div>
            <p>
              I'm also fascinated by streaming and content creation. Whether it's building a community,
              sharing ideas, or creating engaging digital experiences, I enjoy the energy of connecting with
              people and telling stories through media. It's another way I blend creativity with technology.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="content-panel" variants={itemVariants}>
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Academic foundation</h2>
        </div>

        <div className="education-box">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of Hartford — West Hartford, CT</p>
          <p>Minor in Cybersecurity</p>
          <p className="small-note">Dean's List: May 2023, May 2024, May 2026</p>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;
