import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { graphql } from 'react-apollo';

import fetchSong from '../../queries/fetchSong';

class SongDetail extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <Link to="/">Back</Link>
        {data.loading ? (
          <div>Loading...</div>
        ) : (
          <h4>{data.song.title}</h4>
        )}
      </div>
    );
  }
}

export default withRouter(
  graphql(fetchSong, {
    options: (props) => ({ variables: { id: props.match.params.id } })
  }
)(SongDetail));