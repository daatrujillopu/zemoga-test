import React, { Fragment } from 'react';
import pope from './assets/images/pope-frances.jpg';
import kanyeWest from './assets/images/kanye.png';

function App() {
  return (
    <Fragment>
      <header className="header">
          <img className="background" src={pope} alt=""/>
          <div className="container-fluid">
            <div className="menu-with-gradient">
              <nav>
                <ul className="menu">
                  <li className="menu__logo"><a className="menu__logo--text" href="#">Rule of Thumb</a></li>
                  <li><a href="#">Past Trials</a></li>
                  <li><a href="#">How It Works</a></li>
                  <li><a href="#">Log in / Sign Up</a></li>
                  <li className="menu__search">
                    <a href="#435">
                      <i class="fi-xnluhl-magnifying-glass fi-3x"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="box-info-vote">
            <div className="box-info-vote__position">
              <aside className="box-info-vote__container">
                <h6>what's your opinion on</h6>
                <h2>Pope Francis?</h2>
                <p className="box-info-vote__text">He's talking tough on clergy sexual abuse,
                  but is he just another papal pervert protector
                  (thumbs down) or a true pedophile punishing pontiff(thumbs up)
                </p>
                <p className="box-info-vote__more-information"><i class="fab fa-wikipedia-w"></i> <a href="#">More information</a></p>
                <p className="box-info-vote__verdict">What's Your Verdict?</p>
              </aside>
              <div className="box-info-vote__footer">
                  <div className="box-info-vote__footer-thumbs-up">
                    <i class="fi-xwsuhl-thumb-solid fi-2x"></i>
                  </div>
                  <div className="box-info-vote__footer-thumbs-down">
                    <i class="fi-xwsdhl-thumb-solid fi-2x"></i>
                  </div>
              </div>
            </div>
          </div>
          <div className="header__footer">
            <div className="header__footer-closing-days">
              closing in
            </div>
            <div className="header__footer-couting-days">
              22 <span className="header__footer-couting-days--day-text">days</span>
            </div>
          </div>
      </header>
      <section>
        <aside className="porposal">
          <div className="porposal__objetive">
            <div className="porposal__objetive--text">
              Speak out. Be heard
            </div>
            <div className="porposal__objetive--bold-text">
              Be Counted
            </div>
          </div>
          <div className="porposal__rule-thumb">
            Rule of thumb is a crowd sourced court of public opinion where anyone and everyone can
            speak out and speak freely. It's easy: You share your opinion, we analyze and put the data
            in a public report.
          </div>
          <div className="porposal__close">
            <i class="fi-xwluxl-times-wide fa-2x"></i>
          </div>
        </aside>
        <article className="votes">
          <h3>Votes</h3>
          <div className="votes__container">
            <div className="votes__box">
              <div className="votes__background">
                <img src={kanyeWest} alt=""/>
                <div className="votes__info-container">
                  <div className="votes__thumb-up-voting">
                    <i class="fi-xwsuhl-thumb-solid"></i>
                  </div>
                  <div className="votes__character-info">
                    <h2>Kanye West</h2>
                    <small><strong>1 month ago</strong> in Entertainment</small>
                    <p>
                      Vestibulum diam antes, porttitor a odio eget, rhoncus neque.
                      Aenean eu velit liberos
                    </p>

                    <div className="votes__buttons-container">
                      <div className="buttons-container__thumb-up">
                        <i class="fi-xwsuhl-thumb-solid"></i>
                      </div>
                      <div className="buttons-container__thumb-down">
                        <i class="fi-xwsdhl-thumb-solid"></i>
                      </div>
                      
                      <button className="buttons-container__vote-now">
                        Vote now
                      </button>
                    </div>
                  </div>

                  <div className="votes__progresive-bars">
                    <div className="progresive-bars__thumb-up">
                      <i class="fi-xwsuhl-thumb-solid fi-2x"></i>
                      <span className="progresive-bars__thumb-up--percent">50%</span>
                    </div>
                    <div className="progresive-bars__thumb-down">
                      <span className="progresive-bars__thumb-up--percent">50%</span>
                      <i class="fi-xwsdhl-thumb-solid fi-2x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="votes__box">
              <img src={kanyeWest} alt=""/>
            </div>
            <div className="votes__box">
              <img src={kanyeWest} alt=""/>
            </div>
          </div>
        </article>
        <aside className="add-person">
          <div className="add-person__container">
            <div className="add-person__text">
              Is there anyone else you would want us to add ?
            </div>
            <button className="add-person__submit-name">
              Submit a Name
            </button>
          </div>
        </aside>
      </section>
      <footer>
        <ul className="footer__about-us">
          <li className="footer__terms-conditions">
            Terms and conditions
          </li>
          <li className="footer__privacy">
            Privacy Policy
          </li>
          <li className="footer__contact-us">
            Contact Us
          </li>
        </ul>

        <ul className="footer__social-network">
          <li className="footer__follow-us">
            Follow Us
          </li>
          <li className="footer__facebook">
            <i class="fi-snsuxl-facebook fi-2x"></i>
          </li>
          <li className="footer__twitter">
            <i class="fi-xnsuxl-twitter fi-2x"></i>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
}

export default App;
