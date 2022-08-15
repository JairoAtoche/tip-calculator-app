import React from 'react';
import './footer.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__attribution">
        <p className="footer__p">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" className="footer__a">Frontend Mentor</a>. 
          Coded by 
          <a href="https://github.com/JairoAtoche" target="_blank" rel="noopener noreferrer" className="footer__a">Jairo Atoche</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;