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
      <ul style={{ padding: 40 }} className="collection">
        {!loading && songs.map((song) => {
          return (
            <li
              key={song.id}
              className="collection-item"
            >
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
      id
      title
    }
  }
`;

export default graphql(query)(SongList);