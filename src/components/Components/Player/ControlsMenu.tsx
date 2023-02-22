import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';

export const ControlsMenu = ({ playing = false, ...props }) => {
  return (
    <div {...props} className={`p-5 w-full gap-x-4 flex justify-center`}>
      <ButtonPlayer size={'medium'} icon={'backward-step'} />
      <ButtonPlayer size={'medium'} icon={playing ? 'pause' : 'play'} border />
      <ButtonPlayer size={'medium'} icon={'forward-step'} />
    </div>
  );
};
