import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import fetchSongsQuery from '../queries/fetchSongs';

class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      isMenuOpen: false,
      songId: '',
    };
  }

  componentDidMount() {};

  handleOpenMenu = (e, songId) => {
    this.setState({
      anchorEl: e.currentTarget,
      isMenuOpen: true,
      songId,
    });
  };

  handleCloseMenu = () => {
    this.setState({
      anchorEl: null,
      isMenuOpen: false,
      songId: '',
    });
  };

  handleDeleteSong = () => {
    const { songId } = this.state;
    const { mutate } = this.props;

    this.handleCloseMenu();

    mutate({
      variables: {
        id: songId,
      },
      refetchQueries: [{
        query: fetchSongsQuery,
      }]
    });

    // mutate({
    //   variables: {
    //     id: songId,
    //   },
    // }).then(() => refetch());
  };

  render() {
    const { data: { loading, songs } } = this.props;
    const { anchorEl, isMenuOpen, songId } = this.state;

    return (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ mb: 2 }}
          >
            Song List
          </Typography>
        </Grid>

        {!loading && songs.map((song) => {
          return (
            <Grid key={song.id} item xs={12}>
              <Card sx={{ p: 2, mb: 1 }}>
                <Grid container alignContent="center">
                  <Grid item xs>
                    {song.title}
                  </Grid>
                  <Grid item>
                    <IconButton
                      onClick={(event) => this.handleOpenMenu(event, song.id)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}

        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={this.handleCloseMenu}
        >
          <MenuItem component={Link} to={`/song/${songId}`}>
            <MusicNoteIcon /> See Detail
          </MenuItem>
          <MenuItem onClick={this.handleDeleteSong}>
            <DeleteOutlineIcon /> Delete
          </MenuItem>
        </Menu>

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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongsQuery)(SongList));