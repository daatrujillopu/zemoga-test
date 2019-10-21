import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

// @styles
import './styles.scss';

const VoteButtons = ({
    onClickThumbDown,
    onClickThumbUp,
    onClickVoteAgain,
    onClickVoteNow,
    thumbDownSelected,
    thumbUpSelected,
    voteAgain
}) => {
    const thumbUpClasses = classNames(
        'buttons-container__thumb-up',
        { selected: thumbUpSelected }
    );

    const thumbDownClasses = classNames(
        'buttons-container__thumb-down',
        { selected: thumbDownSelected }
    );

    const thumbsButtons = (
        <>
            <button
                className={thumbUpClasses}
                onClick={onClickThumbUp}
                type="button"
            >
                <FaThumbsUp className="buttons-container__thumb-up--icon" />
            </button>

            <button
                className={thumbDownClasses}
                onClick={onClickThumbDown}
                type="button"
            >
                <FaThumbsDown className="buttons-container__thumb-down--icon" />
            </button>
        </>
    );

    const buttonVote = voteAgain
        ? (
            <button
                className="buttons-container__vote-now"
                onClick={onClickVoteAgain}
                type="button"
            >
                Vote Again
            </button>
        )
        : (
            <button
                className="buttons-container__vote-now"
                onClick={onClickVoteNow}
                type="button"
            >
                Vote now
            </button>
        );

    return (
        <>
            {!voteAgain && thumbsButtons}
            {buttonVote}
        </>
    );
};

VoteButtons.propTypes = {
    onClickThumbDown: PropTypes.func.isRequired,
    onClickThumbUp: PropTypes.func.isRequired,
    onClickVoteAgain: PropTypes.func.isRequired,
    onClickVoteNow: PropTypes.func.isRequired,
    thumbDownSelected: PropTypes.bool.isRequired,
    thumbUpSelected: PropTypes.bool.isRequired,
    voteAgain: PropTypes.bool.isRequired
};

export default VoteButtons;
