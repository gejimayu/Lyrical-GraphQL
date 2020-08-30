import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Song List</h1>
        {
          data.loading ? (
            <div>Loading...</div>
          ) : data.songs.map(song => (
            <div key={song.id}>{song.title}</div>
          ))
        }
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