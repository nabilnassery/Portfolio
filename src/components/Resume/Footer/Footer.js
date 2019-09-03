import React, { Component } from 'react';

const Footer = () => {
        return (
            <footer>
                <div class="wrap">
                    <div class="social-links">
                    <a href="https://github.com/nabilnassery"><i className="fa fa-github-square" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/nabilnassery/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    </div>
                    <input type="text" placeholder="Email Address" />
                    <button type="submit">Keep in Touch</button>
                </div>

		        <p class="copyright">&copy;2019 Nabil Nassery</p>
	        </footer>
        )
}

export default Footer;