import { Song } from '../../services/types/Song';
import { Container } from '../Components/Container/Container';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { List } from '../Components/List/List';
import { Player } from '../Components/Player/Player';
import { SearchInput } from '../Core/Forms/SearchInput';

const DEFAULT_COVER =
  'https://i.scdn.co/image/ab6761610000e5eb7b9c72b3e2f9226f5b426291';

type MainLayoutType = {
  song: Song | undefined;
  songsFetching: boolean;
  songsError: Error | null;
  songsList: Song[] | undefined;
  handleSearchTyping(e: React.ChangeEvent<HTMLInputElement>): void;
};
export default function MainLayout({
  song,
  songsFetching,
  songsError,
  songsList,
  handleSearchTyping,
}: MainLayoutType) {
  return (
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
              <SearchInput
                placeholder='Type a song name'
                onChange={handleSearchTyping}
              />
              <List
                loading={songsFetching}
                error={songsError}
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
  );
}
