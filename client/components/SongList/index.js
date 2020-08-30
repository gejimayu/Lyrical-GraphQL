import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

class SongList extends React.Component {
  renderSongList(songs) {
    return (
      <ul className="collection">
        {songs.map(song => (
          <li key={song.id} className="collection-item">{song.title}</li>
        ))}
      </ul>
    )
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Song List</h1>
        {
          data.loading ? (
            <div>Loading...</div>
          ) : this.renderSongList(data.songs)
        }
        <Link
          to="/song/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);