import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import fetchSongByIdQuery from '../queries/fetchSongById';

class SongDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data: { loading, song } } = this.props;

    return (
      <Grid container sx={{ p: 2}}>
        <Grid item xs={12}>
          <Grid container>
            <Button
              variant="outlined"
              size="small"
              component={Link}
              to="/"
              sx={{ mb: 2, borderRadius: 25 }}
            >
              Back
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ mb: 2 }}
          >
            {!loading && song.title}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          Lyric
        </Grid>
      </Grid>
    );
  }
}

export default graphql(fetchSongByIdQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id,
      },
    };
  },
})(SongDetail);
