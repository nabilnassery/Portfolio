import React from 'react';

const Footer = () => {
    return (
      <footer>
        <div className="wrap">
          <div className="social-links">
            <a href="https://github.com/nabilnassery"><i className="fa fa-github-square" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/nabilnassery/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
          <input type="text" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </div>

        <p className="copyright">&copy;2019 Nabil Nassery</p>
      </footer>
    )
}

export default Footer;
