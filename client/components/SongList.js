import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import fetchSongsQuery from '../queries/fetchSongs';

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
            <Grid key={song.id} item xs={12}>
              <Card sx={{ p: 2, mb: 1, mx: 1 }}>
                {song.title}
              </Card>
            </Grid>
          );
        })}

        <Fab
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
          color="primary"
          component={Link}
          to="/song/new"
        >
          <AddIcon />
        </Fab>
      </Grid>
    );
  }
}

export default graphql(fetchSongsQuery)(SongList);