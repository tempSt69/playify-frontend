import { Cover } from '../../Core/Media/Cover';
import { ControlsMenu } from './ControlsMenu';

export const Player = ({ playing = false, ...props }) => {
  return (
    <div
      {...props}
      className={`flex flex-col justify-between h-full w-full p-14 rounded-3xl bg-opacity-40 bg-slate-500`}
    >
      <Cover
        src={'https://angartwork.anghcdn.co/webp/?id=1171884882&size=296'}
      />
      <ControlsMenu />
    </div>
  );
};
