import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

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

        <Fab
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
          color="primary"
          component={Link}
          to="/song/new"
          // onClick={() => alert('Hi')}
        >
          <AddIcon />
        </Fab>
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