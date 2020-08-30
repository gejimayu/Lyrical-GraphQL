import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends React.Component {
  onLikeLyric(id) {
    this.props.mutate({
      variables: {
        id
      }
    })
  }

  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map(({ id, content, likes }) => (
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              <i className="material-icons" onClick={() => this.onLikeLyric(id)}>
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id:$id) {
      id
      likes
      content
    }
  }
`;

export default graphql(mutation)(LyricList);