import React from 'react';
import pope from '../../assets/images/pope-frances.jpg';

// @components
import MainVoteBoxInfo from './main-vote-box-info';
import MenuHeader from './menu';
import Footer from './footer';

// @styles
import './style.scss';

const Header = () => (
    <header className="header">
        <img alt="" className="background" src={pope} />
        <div className="container-fluid">
            <div className="menu-with-gradient">
                <MenuHeader />
            </div>
        </div>
        <MainVoteBoxInfo />
        <Footer />
    </header>
);

export default Header;
