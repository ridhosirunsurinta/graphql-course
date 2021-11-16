import gql from 'graphql-tag';

const fetchSongByIdQuery = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;

export default fetchSongByIdQuery;
