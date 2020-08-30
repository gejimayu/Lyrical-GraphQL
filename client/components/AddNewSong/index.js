import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import fetchSongList from '../../queries/fetchSongList';

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
      },
      refetchQueries: [
        {
          query: fetchSongList
        }
      ]
    }).then(() => this.props.history.push('/'));
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
          <input id="title" value={this.state.title} onChange={this.onInputTitleSong} autoFocus={true} /> 
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

export default graphql(mutation)(withRouter(AddNewSong));