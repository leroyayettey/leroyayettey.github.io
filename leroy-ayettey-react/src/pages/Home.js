import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const skills = [
    'AWS', 'Terraform', 'Java', 'Spring Boot', 'React', 'VPC Architecture',
    'Auto Scaling', 'CloudWatch', 'MongoDB', 'REST APIs', 'Systems Manager', 'Git'
  ];

  const features = [
    {
      tag: 'Cloud Infrastructure',
      title: 'AWS Architecture & IaC',
      description: 'Designing scalable, secure cloud infrastructure using Terraform and AWS services, focused on practical automation and thoughtful system design.'
    },
    {
      tag: 'Full-Stack Development',
      title: 'Java & React Applications',
      description: 'Building production-ready applications with Java Spring Boot backend and React frontend, combining robust APIs with intuitive user experiences.'
    },
    {
      tag: 'Observability & Operations',
      title: 'Monitoring & CloudOps',
      description: 'Implementing comprehensive monitoring, alerting, and operational practices to keep systems reliable and give teams visibility into what matters.'
    }
  ];

  const experience = [
    {
      year: '2023 - Present',
      title: 'Continuous Learning & Growth',
      description: 'Actively deepening cloud architecture knowledge, improving infrastructure automation practices, and building full-stack applications with modern frameworks.'
    },
    {
      year: '2021 - 2026',
      title: 'CS Degree Completion',
      description: 'Earned Bachelor of Science in Computer Science with a minor in Cybersecurity from University of Hartford, consistently making Dean\'s List.'
    }
  ];

  return (
    <motion.main
      className="page-shell"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.section className="hero" variants={itemVariants}>
        <div className="hero-copy">
          <p className="eyebrow">Welcome</p>
          <h1>Building systems with care, intention, and a drive to improve.</h1>
          <p className="lede">
            I'm a junior cloud engineer who loves working with AWS infrastructure, Infrastructure as Code, and full-stack applications.
            I believe good engineering solves real problems thoughtfully, blending technical depth with genuine care for how systems work.
          </p>
          <div className="cta-row">
            <Link to="/projects" className="button primary">View My Work</Link>
            <Link to="/contact" className="button secondary">Get in Touch</Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-header">
            <span className="panel-kicker">Status</span>
            <span className="status-dot"></span>
          </div>
          <div className="metric-grid">
            <div className="metric-card">
              <span className="metric-label">Focus Areas</span>
              <strong>AWS & IaC</strong>
            </div>
            <div className="metric-card">
              <span className="metric-label">Languages</span>
              <strong>Java, JS</strong>
            </div>
          </div>
          <div className="summary-box">
            <p>
              Currently focused on deepening cloud architecture skills and building production-grade applications.
              Always learning, always improving.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="featured-grid" variants={itemVariants}>
        {features.map((feature, index) => (
          <article key={index} className="feature-card">
            <div className="feature-tag">{feature.tag}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </motion.section>

      <motion.section variants={itemVariants}>
        <div style={{ marginTop: '48px' }}>
          <div style={{ marginBottom: '18px' }}>
            <p className="eyebrow">Skills</p>
            <h2>What I work with</h2>
          </div>
          <div className="chip-row">
            {skills.map((skill, index) => (
              <span key={index} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="experience-strip" variants={itemVariants}>
        <div className="strip-header">
          <p className="eyebrow">Timeline</p>
          <h2>Journey</h2>
        </div>
        <div className="timeline-card">
          {experience.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Home;
