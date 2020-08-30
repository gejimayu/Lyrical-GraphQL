import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

class AddNewSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onInputTitleSong = this.onInputTitleSong.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      }
    });
  }

  onInputTitleSong(event) {
    this.setState({ title: event.target.value })
  }
  
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Add new song</h3>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="title">Song title:</label>
          <input id="title" value={this.state.title} onChange={this.onInputTitleSong} /> 
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(AddNewSong);