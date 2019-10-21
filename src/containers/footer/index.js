import React from 'react';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';

// @styles
import './styles.scss';

const Footer = () => (
    <footer>
        <ul className="footer__about-us">
            <li className="footer__terms-conditions">Terms and conditions</li>
            <li className="footer__privacy">Privacy Policy</li>
            <li className="footer__contact-us">Contact Us</li>
        </ul>

        <ul className="footer__social-network">
            <li className="footer__follow-us">Follow Us</li>
            <li className="footer__facebook">
                <FaFacebookSquare className="footer__facebook--icon" />
            </li>
            <li className="footer__twitter">
                <FaTwitter className="footer__twitter--icon" />
            </li>
        </ul>
    </footer>
);


export default Footer;
