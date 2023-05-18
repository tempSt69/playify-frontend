import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { MainLayout } from '../components/Layouts/MainLayout';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';
import { createStreamUrl, search } from '../services/api/Song';
import { Song } from '../services/types/Song';
import { getMoveIndex } from '../utils/changeSong';

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
  const next = () => setSong(songsList![getMoveIndex(+1, song!, songsList!)]);
  const prev = () => setSong(songsList![getMoveIndex(-1, song!, songsList!)]);
  const selectSong = (song: Song) => {
    setSong(song);
    play();
  };
  const progress = () => {
    setProgress(
      audioRef && audioRef.current ? audioRef.current.currentTime : 0
    );
  };
  const handleSearchTyping = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.currentTarget.value);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing, setPlay, song]);

  //handles progressbar and currentTime playing
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
      if (parseInt(progressBarRef.current.value) / song.duration === 1) next();
    }
  }, [timeProgress]);

  useEffect(() => {
    if (songsList && songsList.length > 0 && !song) setSong(songsList[0]);
  }, [songsList]);

  return (
    <MusicPlayerContext.Provider
      value={{
        playing,
        audioRef,
        progressBarRef,
        pause,
        play,
        next,
        prev,
        song,
        selectSong,
        timeProgress,
      }}
    >
      {song ? (
        <audio
          src={createStreamUrl(song._id)}
          ref={audioRef}
          className={`hidden`}
          onTimeUpdate={progress}
        ></audio>
      ) : null}
      <MainLayout
        playing={playing}
        song={song}
        songsFetching={songsFetching}
        songsError={songsError}
        songsList={songsList}
        handleSearchTyping={handleSearchTyping}
      />
    </MusicPlayerContext.Provider>
  );
};
