import { Container } from '../components/Components/Container/Container';
import { Footer } from '../components/Components/Footer/Footer';
import { Header } from '../components/Components/Header/Header';
import { List } from '../components/Components/List/List';
import { Player } from '../components/Components/Player/Player';
import { SearchInput } from '../components/Core/Inputs/SearchInput';

export const Main = () => {
  return (
    <div className='h-screen relative'>
      <div
        className='absolute top-0 left-0 h-screen w-full bg-no-repeat dark:bg-slate-900'
        style={{
          backgroundImage: `url(https://i.scdn.co/image/ab67616d0000b273cebeb00e14c98d358152eb90)`,
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
                cover={
                  'https://i.scdn.co/image/ab67616d0000b273cebeb00e14c98d358152eb90'
                }
                playing
              />
            </div>
            <div className='w-7/12 px-5'>
              <SearchInput />
              <List
                items={[
                  {
                    _id: '1',
                    active: true,
                    duration: '3:00',
                    name: 'Moto - Alekos',
                    trackUrl: '',
                  },
                ]}
                activeId={''}
              />
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};
