import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
class LyricCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }

    this.onSubmitLyric = this.onSubmitLyric.bind(this);
  }

  onSubmitLyric(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content,
      }
    });
    this.setState({ content: '' });
  }
    
  render() {
    return (
      <form onSubmit={this.onSubmitLyric}>
        <label>Add a lyric</label>
        <input value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);