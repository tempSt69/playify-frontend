import { Cover } from '../../Core/Media/Cover';
import { ControlsMenu } from './ControlsMenu';

export const Player = ({ playing = false, ...props }) => {
  return (
    <div
      {...props}
      className={`flex flex-col gap-3 justify-between h-full w-full pb-5 p-12 rounded-[50px] bg-opacity-40 bg-slate-500`}
    >
      <Cover
        src={'https://angartwork.anghcdn.co/webp/?id=1171884882&size=296'}
      />
      <ControlsMenu playing={playing} />
    </div>
  );
};
