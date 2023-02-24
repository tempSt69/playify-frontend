import { useContext } from 'react';
import { MusicPlayerContext } from '../../../contexts/MusicPlayerContext';
import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';

export const ControlsMenu = ({ ...props }) => {
  const { playing, play, pause, next, prev } = useContext(MusicPlayerContext);
  return (
    <div {...props} className={`p-5 w-full gap-x-10 flex justify-center`}>
      <ButtonPlayer onClick={prev} size={'xlarge'} icon={'backward-step'} />
      {}
      <ButtonPlayer
        size={'xlarge'}
        onClick={playing ? pause : play}
        icon={playing ? 'pause' : 'play'}
        border
      />
      <ButtonPlayer onClick={next} size={'xlarge'} icon={'forward-step'} />
    </div>
  );
};
