import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
      <motion.section className="contact-panel" variants={itemVariants}>
        <p className="eyebrow">Get in touch</p>
        <h1>Open to opportunities where I can keep learning, contribute, and build meaningful systems.</h1>

        <div className="contact-list">
          <a href="mailto:leroy.ayettey@outlook.com">leroy.ayettey@outlook.com</a>
          <a href="tel:8607093150">(860) 709-3150</a>
          <a href="https://github.com/leroyayettey" target="_blank" rel="noreferrer">github.com/leroyayettey</a>
          <span>Bloomfield, CT</span>
        </div>

        <div className="cta-row">
          <a className="button primary" href="mailto:leroy.ayettey@outlook.com">Email Me</a>
          <a className="button secondary" href="https://github.com/leroyayettey" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Contact;
