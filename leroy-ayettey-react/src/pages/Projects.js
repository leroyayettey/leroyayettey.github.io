import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const projects = [
    {
      tag: 'Terraform | HCL | AWS',
      title: 'Terraform Multi-Environment Infrastructure Automation',
      description: 'I built reusable Terraform modules for networking, compute, and security to create consistent environments that are easier to manage, review, and scale.',
      skills: [
        'Reusable module design',
        'Multi-environment provisioning',
        'Versioned infrastructure workflows'
      ]
    },
    {
      tag: 'AWS VPC | Networking',
      title: 'Enterprise Multi-Tier AWS Network Architecture',
      description: 'I designed a segmented network with public, private application, and isolated database tiers to support secure communication and a healthier system foundation.',
      skills: [
        'Internet Gateway and NAT Gateway setup',
        'Tiered route and security design',
        'Thoughtful multi-AZ architecture'
      ]
    },
    {
      tag: 'EC2 | ALB | Auto Scaling',
      title: 'Highly Available AWS Application Infrastructure',
      description: 'I built resilient infrastructure using load balancing and auto-scaling so applications can remain available, responsive, and easier to grow over time.',
      skills: [
        'Launch template configuration',
        'IAM and IMDSv2 hardening',
        'Availability across multiple AZs'
      ]
    },
    {
      tag: 'Systems Manager | Security',
      title: 'Secure Private EC2 Administration',
      description: 'I focused on reducing public exposure and strengthening system security by moving administration into safer, controlled workflows.',
      skills: [
        'Private EC2 administration',
        'Least-privilege access patterns',
        'Security-minded engineering choices'
      ]
    },
    {
      tag: 'CloudWatch | Monitoring',
      title: 'Cloud Observability & Operations Monitoring',
      description: 'I developed observability patterns that help reveal how systems behave in real time, making improvement and troubleshooting feel more intentional.',
      skills: [
        'Dashboards and operational alarms',
        'Centralized logs and alerting',
        'Improved operational awareness'
      ]
    },
    {
      tag: 'Java | Spring Boot',
      title: 'Full-Stack Automotive Service Platform',
      description: 'I developed backend services for quote requests and scheduling with REST APIs and MongoDB, blending application logic with practical system design.',
      skills: [
        'REST API development',
        'MongoDB data handling',
        'Cloud-hosted service architecture'
      ]
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
      <motion.section className="page-intro" variants={itemVariants}>
        <p className="eyebrow">Selected Work</p>
        <h1>Projects shaped by curiosity, discipline, and a love for real systems.</h1>
      </motion.section>

      <motion.section className="project-grid" variants={itemVariants}>
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-topline">{project.tag}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </motion.section>
    </motion.main>
  );
};

export default Projects;
