import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
    const { mutate } = this.props;
    const { title } = this.state;

    mutate({
      variables: {
        title,
      }
    });
  };

  render() {
    const { title } = this.state;

    return (
      <Grid container sx={{ p: 2}}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ mb: 1 }}
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

          <pre>{JSON.stringify(title, null, 2)}</pre>
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

export default graphql(mutation)(SongCreate);
