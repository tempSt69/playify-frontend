import { Cover } from '../../Core/Media/Cover';
import { ControlsMenu } from './ControlsMenu';

type TypePlayer = {
  cover?: string;
  playing?: boolean;
};

export const Player = ({
  cover = 'https://i.scdn.co/image/ab6761610000e5eb7b9c72b3e2f9226f5b426291',
  playing = false,
  ...props
}: TypePlayer) => {
  return (
    <div
      {...props}
      className={`flex flex-col gap-3 justify-between h-full w-full pb-5 p-12 rounded-[50px] bg-opacity-40 bg-slate-300 dark:bg-slate-700`}
    >
      <Cover src={cover} lowOpacity={!playing} />
      <ControlsMenu playing={playing} />
    </div>
  );
};
