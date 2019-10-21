import React from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

// @styles
import './style.scss';

const MainVoteBoxInfo = () => (
    <>
        <div className="box-info-vote">
            <div className="box-info-vote__position">
                <aside className="box-info-vote__container">
                    <h6>what &apos;s your opinion on</h6>
                    <h2>Pope Francis?</h2>
                    <p className="box-info-vote__text">
                        He&apos;s talking tough on clergy sexual abuse,but is he just another papal pervert protector (thumbs down) or a true pedophile punishing pontiff(thumbs up)
                    </p>
                    <p className="box-info-vote__more-information">
                        <i className="fab fa-wikipedia-w" />
                        <a href="#">More information</a>
                    </p>
                    <p className="box-info-vote__verdict">What&apos;s Your Verdict?</p>
                </aside>
                <div className="box-info-vote__footer">
                    <div className="box-info-vote__footer-thumbs-up">
                        <FaThumbsUp className="box-info-vote__footer-thumbs-up--icon" />
                    </div>
                    <div className="box-info-vote__footer-thumbs-down">
                        <FaThumbsDown className="box-info-vote__footer-thumbs-down--icon" />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default MainVoteBoxInfo;
