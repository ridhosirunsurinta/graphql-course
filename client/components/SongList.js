import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {};

  render() {
    const { data: { loading, songs } } = this.props;

    return (
      <ul style={{ padding: 40 }}>
        {!loading && songs.map((song) => {
          return (
            <li key={song.title}>
              {song.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);