import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';

export const ControlsMenu = ({ playing = false, ...props }) => {
  return (
    <div {...props} className={`p-5 w-full gap-x-10 flex justify-center`}>
      <ButtonPlayer size={'xlarge'} icon={'backward-step'} />
      <ButtonPlayer size={'xlarge'} icon={playing ? 'pause' : 'play'} border />
      <ButtonPlayer size={'xlarge'} icon={'forward-step'} />
    </div>
  );
};
