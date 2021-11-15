import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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

  render() {
    const { title } = this.state;

    return (
      <Grid container sx={{ p: 2 }}>
        <Grid item>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ mb: 1 }}
          >
            Create a New Song
          </Typography>

          <form>
            <TextField
              label="Song Title"
              variant="outlined"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

          <pre>{JSON.stringify(title, null, 2)}</pre>
        </Grid>
      </Grid>
    );
  }
}

export default SongCreate;
