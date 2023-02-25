import { Cover } from '../../Core/Media/Cover';
import { ControlsMenu } from './ControlsMenu';

type TypePlayer = {
  cover: string;
  hasSong?: boolean;
  playing?: boolean;
};

export const Player: React.FC<TypePlayer> = ({
  cover,
  hasSong = false,
  playing = false,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${
        hasSong ? 'pb-5 ' : ''
      } flex flex-col gap-3 justify-between h-full w-full p-12 rounded-[50px] bg-opacity-40 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-40`}
    >
      <Cover src={cover} lowOpacity={!hasSong} />
      {hasSong ? <ControlsMenu playing={playing} /> : null}
    </div>
  );
};
