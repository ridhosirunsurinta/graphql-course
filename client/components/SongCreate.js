import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import fetchSongsQuery from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { mutate, history } = this.props;
    const { title } = this.state;

    mutate({
      variables: {
        title,
      },
      refetchQueries: [{
        query: fetchSongsQuery,
      }]
    }).then(() => history.push('/'));
  };

  render() {
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
            Create a New Song
          </Typography>

          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Song Title"
              variant="standard"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </form>
        </Grid>
      </Grid>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default compose(
  graphql(mutation),
  withRouter,
)(SongCreate);
