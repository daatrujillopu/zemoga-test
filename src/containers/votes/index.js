import React, { PureComponent } from 'react';
import { findIndex } from 'lodash';

// @components
import Porposal from './porposal';
import VoteBox from '../../components/vote-box';
import AddPerson from './add-person';
// data
import artists from '../../assets/data.json';

// @styles
import './styles.scss';

class Votes extends PureComponent {
    constructor(props) {
        super(props);

        this.onClickVote = this.onClickVote.bind(this);

        this.state = {
            artists: []
        };
    }

    componentDidMount() {
        let data = artists;

        if (window.localStorage.getItem('artists')) {
            data = JSON.parse(window.localStorage.getItem('artists'));
        }

        this.setState({
            artists: data
        }, () => this.writeLocalStorage('artists'));
    }

    onClickVote(id, voteThumb) {
        const { artists } = this.state;
        const artist = artists.find((artist) => artist.id === id);
        const artistIndex = findIndex(artists, (artist) => artist.id === id);

        if (voteThumb === 0) {
            artist.votes.thumbsUp += 1;
        } else {
            artist.votes.thumbsDown += 1;
        }

        artists[artistIndex] = artist;

        this.setState({
            artists
        }, () => this.writeLocalStorage('artists'));
    }

    writeLocalStorage(key) {
        const { artists } = this.state;
        window.localStorage.setItem(key, JSON.stringify(artists));
    }

    renderVoteBoxes() {
        const { artists } = this.state;

        return artists.map((artist, index) => (
            <VoteBox
                artist={artist.artist}
                id={artist.id}
                key={index}
                onClickVote={this.onClickVote}
                votes={artist.votes}
            />
        ));
    }

    render() {
        return (
            <div>
                <section>
                    <Porposal />
                    <article className="votes">
                        <h3>Votes</h3>
                        <div className="votes__container">
                            {this.renderVoteBoxes()}
                        </div>
                    </article>
                    <AddPerson />
                </section>
            </div>
        );
    }
}

export default Votes;
