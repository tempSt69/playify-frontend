import { Main } from './pages/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faShuffle,
  faMagnifyingGlass,
  faGear,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faShuffle,
  faMagnifyingGlass,
  faGear,
  faMoon,
  faSun
);

function App() {
  return <Main />;
}

export default App;
