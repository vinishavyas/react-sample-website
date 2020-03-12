import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
        <div className="container">
          <div className="ftr-top">
            <div className="ftr1">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="">Post Project</Link></li>
                <li><Link to={'/pages/how-it-works'}>How it works</Link></li>
                <li><Link to="">Contact Us</Link></li>
                <li><Link to={'/pages/about-us'}>About Us</Link></li>
                <li><Link to={'/pages/terms-and-condition'}>Terms & Conditions</Link></li>
                <li><Link to={'/pages/privacy-policy'}>Privacy Policy</Link></li>
                <li><Link to={'/pages/faq'}>Faq’s</Link></li>
                <li><Link to="">Sitemap</Link></li>
              </ul>
            </div>
            <div className="ftr2">
              <h4>Social Links</h4>
              <ul>
                <li><Link to=""><i className="fab fa-facebook-f"></i> Facebook</Link></li>
                <li><Link to=""><i className="fab fa-twitter"></i> Twitter</Link></li>
                <li><Link to=""><i className="fab fa-linkedin-in"></i> Linkedin</Link></li>
              </ul>
            </div>
            <div className="ftr3">
              <h4>Get in Touch With Us</h4>
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> address: Lorem ipsum dolor sit amet
                  Onsectetuer adipiscing elit.</li>
                <li><i className="fas fa-envelope"></i> email: <Link to="mailto:demo@posthemes.com" target="_blank">demo@posthemes.com</Link></li>
                <li><i className="fas fa-phone"></i> phone: <Link to="tel:0987654321" target="_blank">0987.654.321</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ftr-btm">
          <div className="container"> &copy; 2019 www.unisource.org.uk. All Rights Reserved </div>
        </div>
      </footer>
    );
    
}

export default Footer;