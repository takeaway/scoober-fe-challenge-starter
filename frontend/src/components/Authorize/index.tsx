import { ReactNode } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';

interface AuthorizeProps {
  children?: ReactNode;
}

export default function Authorize({ children }: AuthorizeProps) {
  const userInfo = useAppSelector(state => state.user);
  const location = useLocation();

  return !!userInfo.user && !!userInfo.socketId ? (
    <>
      {children}
    </>
  ) : (
    <Redirect
      exact
      to={`/login/?redirectTo=${location.pathname}`}
    />
  );
}
