import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

import fetchSongList from '../../queries/fetchSongList';

class SongList extends React.Component {
  onSongDelete(id) {
    this.props.mutate({
      variables: {
        id
      }
    }).then(() => this.props.data.refetch())
  }

  renderSongList(songs) {
    return (
      <ul className="collection">
        {songs.map(({ id, title }) => (
          <li key={id} className="collection-item">
            {title}
            <i className="material-icons" onClick={() => this.onSongDelete(id)}>delete</i>
          </li>
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

const mutation = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongList)(SongList));