import React from 'react';
import { FaSearch } from 'react-icons/fa';

// @styles
import './style.scss';

const HeaderMenu = () => (
    <nav>
        <ul className="menu">
            <li className="menu__logo">
                <a className="menu__logo--text" href="#">Rule of Thumb</a>
            </li>
            <li>
                <a href="#"> Past Trials</a>
            </li>
            <li>
                <a href="#">How It Works</a>
            </li>
            <li>
                <a href="#">Log in / Sign Up</a>
            </li>
            <li className="menu__search">
                <a href="#435">
                    <FaSearch className="menu__search--icon" />
                </a>
            </li>
        </ul>
    </nav>
);

export default HeaderMenu;
