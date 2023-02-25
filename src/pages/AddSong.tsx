import { useMutation, useQuery } from 'react-query';
import AddSongLayout from '../components/Layouts/AddSong';
import { getAll } from '../services/api/Artist';
import { insertSong } from '../services/api/Song';
import { Artist } from '../services/types/Artist';

export const AddSong = () => {
  const {
    isFetching: artistsFetching,
    error: artistsError,
    data: artistList,
  } = useQuery<Artist[], Error>(['artists'], getAll);

  const { mutate: addSongMutaton } = useMutation(insertSong);

  return (
    <AddSongLayout
      addSong={addSongMutaton}
      loading={artistsFetching}
      artistList={artistList!}
    />
  );
};
