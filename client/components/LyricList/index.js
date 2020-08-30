import React from 'react';

class LyricList extends React.Component {
  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map(({ id, content }) => (
          <li key={id} className="collection-item">{content}</li>
        ))}
      </ul>
    );
  }
}

export default LyricList;