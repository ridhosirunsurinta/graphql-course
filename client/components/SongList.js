import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

class SongList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {};

  render() {
    const { data: { loading, songs } } = this.props;

    return (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        sx={{ pt: 1 }}
      >
        {!loading && songs.map((song) => {
          return (
            <Grid item xs={12}>
              <Card
                key={song.id}
                sx={{ p: 2, mb: 1, mx: 1 }}
              >
                {song.title}
              </Card>
            </Grid>
          );
        })}
      </Grid>
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