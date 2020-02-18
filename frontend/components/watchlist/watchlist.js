import React from 'react';

class Watchlist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            watchlists: this.props.watchlists
        }
    };

    componentDidMount() {
        this.props.fetchWatchlist()
            .then(action => this.setState({watchlists: action.watchlists}))
    }

    render() {
        let watchlists = Object.values(this.state.watchlists);

        return (
            <ul className="watchlist-container">
                {
                    watchlists.map(watchlist => (
                        <WatchlistItem watchlist={watchlist} key={watchlist.id} />
                    ))
                }
            </ul>
        )
    }
};

export default Watchlist