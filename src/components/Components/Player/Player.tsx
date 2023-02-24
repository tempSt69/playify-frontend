import { Cover } from '../../Core/Media/Cover';
import { ControlsMenu } from './ControlsMenu';

type TypePlayer = {
  cover: string;
  hasSong?: boolean;
  playing?: boolean;
};

export const Player = ({
  cover,
  hasSong = false,
  playing = false,
  ...props
}: TypePlayer) => {
  return (
    <div
      {...props}
      className={`${
        hasSong ? 'pb-5 ' : ''
      } flex flex-col gap-3 justify-between h-full w-full p-12 rounded-[50px] bg-opacity-40 bg-slate-300 dark:bg-slate-700`}
    >
      <Cover src={cover} lowOpacity={!playing} />
      {hasSong ? <ControlsMenu playing={playing} /> : null}
    </div>
  );
};
