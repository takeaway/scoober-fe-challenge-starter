import { FormEvent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SocketProvider from '../../SocketProvider';
import { useAppSelector } from '../../redux/hooks';

import TextBox from '../../atoms/text-input';
import Button from '../../atoms/button';
import Spinner from '../../atoms/spinner';
import Layover from '../../components/layover';
import MainTemplate from '../../templates/main';
import { getQueryParams } from '../../utils/url-helpers';
import { LoginPageParams } from '../../types';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const userInfo = useAppSelector(state => state.user);
  const history = useHistory();
  const { search } = useLocation();
  const { redirectTo } = getQueryParams<LoginPageParams>(search);

  useEffect(() => {
    console.log(userInfo);
    if (userInfo.user && userInfo.socketId) {
      history.push(redirectTo || '/room');
    }
  }, [userInfo]);

  function inputChange({ currentTarget }: FormEvent<HTMLInputElement>) {
    const { value } = currentTarget;
    setUsername(value);
  }

  function login() {
    const socket = SocketProvider.getInstance();
    setLoading(true);
    socket.login(username);
  }

  return (
    <MainTemplate headerMessage='Welcome to Game of Three'>
      <div className='px-2 max-w-[400px] mx-auto pt-5'>
        <h2 className='font-bold text-3xl mb-3'>Please Login with your Username</h2>
        <TextBox className='mb-5' onChange={inputChange} value={username} label='Username'/>
        <Button label='Login' onClick={login} className='w-full primary-button'/>
      </div>
      {
        loading && (
          <Layover>
            <Spinner/>
          </Layover>
        )
      }
    </MainTemplate>
  );
};

export default LoginPage;
