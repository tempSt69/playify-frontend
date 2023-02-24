import {
  ChangeEventHandler,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import { Container } from '../components/Components/Container/Container';
import { Footer } from '../components/Components/Footer/Footer';
import { Header } from '../components/Components/Header/Header';
import { List } from '../components/Components/List/List';
import { Player } from '../components/Components/Player/Player';
import { SearchInput } from '../components/Core/Inputs/SearchInput';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';
import { getAll, search, streamUrl } from '../services/api/Song';
import { Song } from '../services/types/Song';

const DEFAULT_COVER =
  'https://i.scdn.co/image/ab6761610000e5eb7b9c72b3e2f9226f5b426291';

export const Main = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const [playing, setPlay] = useState<boolean>(false);
  const [song, setSong] = useState<Song | undefined>(undefined);
  const [timeProgress, setProgress] = useState<number | undefined>(0);
  const [searchString, setSearch] = useState<string>('');

  const {
    isFetching: songsFetching,
    error: songsError,
    data: songsList,
  } = useQuery<Song[], Error>(['songs', searchString], () =>
    search(searchString)
  );

  const play = () => setPlay(true);
  const pause = () => setPlay(false);
  const selectSong = (song: Song) => setSong(song);
  const progress = () =>
    setProgress(
      audioRef && audioRef.current ? audioRef.current.currentTime : 0
    );
  const handleSearchTyping = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.currentTarget.value);

  useEffect(() => {
    if (playing) {
      console.log('playing', playing);
      audioRef.current?.play();
    } else {
      console.log('playing', playing);
      audioRef.current?.pause();
    }
  }, [playing]);

  useEffect(() => {
    console.log('play', 'song??');
    play();
  }, [song]);

  useEffect(() => {
    if (
      song &&
      audioRef &&
      audioRef.current &&
      progressBarRef &&
      progressBarRef.current
    ) {
      const currentTime = audioRef.current.currentTime;
      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(parseInt(progressBarRef.current.value) / song.duration) * 100}%`
      );
    }
  }, [timeProgress]);

  return (
    <MusicPlayerContext.Provider
      value={{
        playing,
        audioRef,
        progressBarRef,
        pause,
        play,
        song,
        selectSong,
        timeProgress,
      }}
    >
      {song ? (
        <audio
          src={streamUrl(song._id)}
          ref={audioRef}
          className={`hidden`}
          onTimeUpdate={progress}
        ></audio>
      ) : null}
      <div className='h-screen relative'>
        <div
          className='absolute top-0 left-0 h-screen w-full bg-no-repeat dark:bg-slate-900'
          style={{
            backgroundImage: song
              ? `url(${song.artist.cover})`
              : `url(${DEFAULT_COVER})`,
            backgroundSize: '50% 70%',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='absolute top-0 left-0 h-screen w-full backdrop-blur-xl dark:bg-slate-900 dark:bg-opacity-80 bg-slate-300 bg-opacity-60'>
          <Header />
          <Container>
            <div className='flex justify-between w-full h-full pt-16'>
              <div className='w-5/12'>
                <Player
                  playing={song ? true : false}
                  cover={song ? song.artist.cover : DEFAULT_COVER}
                  hasSong={song ? true : false}
                />
              </div>
              <div className='w-7/12 px-5'>
                <SearchInput onChange={handleSearchTyping} />
                <List
                  loading={songsFetching}
                  items={
                    songsList
                      ? songsList.map((songItem) => ({
                          item: {
                            ...songItem,
                            name: `${songItem.artist.name} - ${songItem.name}`,
                            active:
                              song && song._id === songItem._id ? true : false,
                          },
                        }))
                      : []
                  }
                />
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      </div>
    </MusicPlayerContext.Provider>
  );
};
