import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';
export const Header = ({ ...props }) => {
  return (
    <div
      {...props}
      className={`flex justify-end items-start w-full absolute top-0 right-0`}
    >
      <ButtonPlayer icon={'gear'} size={'large'} />
      <ButtonPlayer icon={'moon'} size={'large'} />
    </div>
  );
};
