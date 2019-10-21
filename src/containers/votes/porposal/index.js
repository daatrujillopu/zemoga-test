import React from 'react';

// @styles
import './style.scss';

const Porposal = () => (
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
            speak out and speak freely. It&apos;s easy: You share your opinion, we analyze and put the data
            in a public report.
        </div>
        <div className="porposal__close">
            <i className="fi-xwluxl-times-wide fa-2x" />
        </div>
    </aside>
);


export default Porposal;
