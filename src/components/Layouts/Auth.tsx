import { useForm, SubmitHandler, FieldValue } from 'react-hook-form';
import { Header } from '../Components/Header/Header';
import { Button } from '../Core/Buttons/Button';
import { TextInput } from '../Core/Forms/TextInput';
import { Panel } from '../Core/Panel/Panel';
import { Head2 } from '../Core/Texts/Head2';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

type AuthLayoutType = {
  loginUser: (username: string, password: string) => Promise<any>;
  registerUser: (username: string, password: string) => Promise<any>;
};

type AuthFormValues = {
  username: string;
  password: string;
};

export const AuthLayout: React.FC<AuthLayoutType> = ({
  loginUser,
  registerUser
}) => {
  const { register, handleSubmit } = useForm<AuthFormValues>();
  const { setToken } = useContext(AuthContext);
  const login: SubmitHandler<AuthFormValues> = async (data) => {
    const loginResult = await loginUser(data.username, data.password);
    setToken(loginResult.token);
  };
  const signup: SubmitHandler<AuthFormValues> = async (data) => {
    console.log(data);

    registerUser(data.username, data.password);
  };

  return (
    <div className="h-screen w-full backdrop-blur-xl dark:bg-slate-900 dark:bg-opacity-80 bg-slate-300 bg-opacity-60">
      <Header />
      <div className="flex items-center justify-center h-screen w-4/12 mx-auto">
        <Panel>
          <form onSubmit={handleSubmit(login)} encType="multipart/form-data">
            <Head2 className="mb-5">Login</Head2>

            <TextInput
              register={register}
              name="username"
              placeholder="Username"
            />
            <TextInput
              register={register}
              name="password"
              placeholder="password"
            />
            <div className="mt-2">
              <Button type="submit" label="Se connecter" />
            </div>
          </form>
        </Panel>
      </div>
    </div>
  );
};
