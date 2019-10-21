import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    capitalize,
    round,
    startCase
} from 'lodash';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

// @components
import VoteButtons from '../../containers/votes/vote-buttons';

class VoteBox extends PureComponent {
    constructor(props) {
        super(props);

        this.onClickThumbUp = this.onClickThumbUp.bind(this);
        this.onClickThumbDown = this.onClickThumbDown.bind(this);
        this.onClickVoteNow = this.onClickVoteNow.bind(this);
        this.onClickVoteAgain = this.onClickVoteAgain.bind(this);

        this.state = {
            thumbUpSelected: true,
            thumbDownSelected: false,
            voteAgain: false
        };
    }

    onClickThumbUp() {
        this.setState({
            thumbUpSelected: true,
            thumbDownSelected: false
        });
    }

    onClickThumbDown() {
        this.setState({
            thumbUpSelected: false,
            thumbDownSelected: true
        });
    }

    onClickVoteNow() {
        const { id, onClickVote } = this.props;
        const { thumbUpSelected } = this.state;
        const thumbSelected = thumbUpSelected ? 0 : 1;
        onClickVote(id, thumbSelected);
        this.setState({
            voteAgain: true
        });
    }

    onClickVoteAgain() {
        this.setState({
            voteAgain: false
        });
    }

    getPercentVotes() {
        const {
            votes: {
                thumbsDown,
                thumbsUp
            }
        } = this.props;
        const totalVotes = thumbsUp + thumbsDown;

        const percentThumbsUp = round((thumbsUp / totalVotes) * 100);
        const percentThumbsDown = round((thumbsDown / totalVotes) * 100);
        return {
            percentThumbsUp,
            percentThumbsDown
        };
    }

    timeVoting() {
        const {
            artist: {
                area,
                timeVotingMonths
            }

        } = this.props;

        let monthTime = 'month';

        if (timeVotingMonths > 2) {
            monthTime = 'months';
        }

        const timeVoting = `${timeVotingMonths} ${monthTime} ago`;
        const areArtist = `in ${area}`;

        return (
            <small>
                <strong>
                    {timeVoting}
                </strong>
                {capitalize(areArtist)}
            </small>
        );
    }

    progresionBars() {
        const percents = this.getPercentVotes();
        const thumbUpStyle = {
            width: `${percents.percentThumbsUp}%`
        };
        const thumbsDownStyle = {
            width: `${percents.percentThumbsDown}%`
        };


        return (
            <div className="votes__progresive-bars">
                <div className="progresive-bars__thumb-up" style={thumbUpStyle}>
                    <FaThumbsUp className="progresive-bars__thumb-up--icon" />
                    <span className="progresive-bars__thumb-up--percent">
                        {`${percents.percentThumbsUp}%`}
                    </span>
                </div>
                <div className="progresive-bars__thumb-down" style={thumbsDownStyle}>
                    <span className="progresive-bars__thumb-down--percent">
                        {`${percents.percentThumbsDown}%`}
                    </span>
                    <FaThumbsDown className="progresive-bars__thumb-down--icon" />
                </div>
            </div>
        );
    }

    renderCurrentVoting() {
        const percents = this.getPercentVotes();
        let currentVoting = (
            <div className="votes__thumb-down-voting">
                <FaThumbsDown className="votes__thumb-down-voting--icon" />
            </div>
        );

        if (percents.percentThumbsUp >= percents.percentThumbsDown) {
            currentVoting = (
                <div className="votes__thumb-up-voting">
                    <FaThumbsUp className="votes__thumb-up-voting--icon" />
                </div>
            );
        }

        return currentVoting;
    }

    renderShortInfoOrVoteAgain() {
        const {
            artist: {
                shortInfo
            }
        } = this.props;

        const { voteAgain } = this.state;

        let infoText = <p>{capitalize(shortInfo)}</p>;

        if (voteAgain) {
            infoText = <p>Thanks you for voting</p>;
        }
        return infoText;
    }


    render() {
        const {
            artist: {
                altImage,
                image,
                name
            }
        } = this.props;

        const {
            thumbDownSelected,
            thumbUpSelected,
            voteAgain
        } = this.state;

        return (
            <div className="votes__box">
                <div className="votes__background">
                    <img alt={altImage} src={image} />
                    <div className="votes__info-container">
                        {this.renderCurrentVoting()}
                        <div className="votes__character-info">
                            <h2>{startCase(name)}</h2>
                            {this.timeVoting()}
                            {this.renderShortInfoOrVoteAgain()}

                            <div className="votes__buttons-container">
                                <VoteButtons
                                    onClickThumbDown={this.onClickThumbDown}
                                    onClickThumbUp={this.onClickThumbUp}
                                    onClickVoteAgain={this.onClickVoteAgain}
                                    onClickVoteNow={this.onClickVoteNow}
                                    thumbDownSelected={thumbDownSelected}
                                    thumbUpSelected={thumbUpSelected}
                                    voteAgain={voteAgain}

                                />
                            </div>
                        </div>
                        {this.progresionBars()}
                    </div>
                </div>
            </div>
        );
    }
}

VoteBox.propTypes = {
    artist: PropTypes.shape({
        altImage: PropTypes.string,
        area: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        timeVotingMonths: PropTypes.number,
        shortInfo: PropTypes.string
    }).isRequired,
    id: PropTypes.number.isRequired,
    onClickVote: PropTypes.func.isRequired,
    votes: PropTypes.shape({
        thumbsDown: PropTypes.number,
        thumbsUp: PropTypes.number
    }).isRequired
};

export default VoteBox;
