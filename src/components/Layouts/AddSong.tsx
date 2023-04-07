import { useForm, SubmitHandler, FieldValue } from 'react-hook-form';
import { Artist } from '../../services/types/Artist';
import { Song } from '../../services/types/Song';
import { Header } from '../Components/Header/Header';
import { Button } from '../Core/Buttons/Button';
import { InputFile } from '../Core/Forms/InputFile';
import { Select } from '../Core/Forms/Select';
import { TextInput } from '../Core/Forms/TextInput';
import { Panel } from '../Core/Panel/Panel';
import { Head2 } from '../Core/Texts/Head2';

type AddSongLayout = {
  addSong(song: Omit<Omit<Song, 'id'>, 'trackUrl'> & { file: File }): void;
  loading: boolean;
  artistList: Artist[];
};

type SongFormValues = {
  name: string;
  artist: string;
  duration: number;
  file: FileList;
};

export const AddSongLayout: React.FC<AddSongLayout> = ({
  addSong,
  loading,
  artistList,
}) => {
  const { register, handleSubmit } = useForm<SongFormValues>();
  const onSubmit: SubmitHandler<SongFormValues> = async (data) => {
    console.log(data);

    const artistFound = artistList.find((art) => art.id === data.artist);
    if (artistFound) {
      addSong({
        ...data,
        artist: artistFound,
        file: data.file[0],
      });
    }
  };

  return (
    <div className='h-screen w-full backdrop-blur-xl dark:bg-slate-900 dark:bg-opacity-80 bg-slate-300 bg-opacity-60'>
      <Header />
      {loading ? (
        <div className='flex items-center justify-center'>
          <div
            className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid dark:border-white border-black border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
            role='status'
          >
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center h-screen w-4/12 mx-auto'>
          <Panel>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType='multipart/form-data'
            >
              <Head2 className='mb-5'>Add a song</Head2>

              <TextInput
                register={register}
                name='name'
                placeholder='Song name'
              />
              <TextInput register={register} type='number' name='duration' />
              <Select register={register} name='artist'>
                <>
                  {artistList.map((artist, key) => (
                    <option key={key} value={artist.id}>
                      {artist.name}
                    </option>
                  ))}
                </>
              </Select>
              <InputFile register={register} name='file' />
              <div className='mt-2'>
                <Button type='submit' label='Ajouter' />
              </div>
            </form>
          </Panel>
        </div>
      )}
    </div>
  );
};
