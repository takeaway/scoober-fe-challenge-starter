import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import RoomPage from './pages/room';
import Authorize from './components/Authorize';

import SocketProvider from './SocketProvider';
import { addUserInfo } from './redux/reducers/user';
import { updateRoomStatus, addTurnRecord, updateTurnStatus, setGameOver } from './redux/reducers/game';
import { useAppDispatch } from './redux/hooks';

import { User, GameRecord, GameStatus } from './types';

function logger(data: any) {
  console.log(data);
}

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket: SocketProvider = SocketProvider.getInstance({
      serverUrl: 'ws://localhost:8082',
      onConnect: (data: any) => { logger({ ...data, caller: 'onConnect' }); },
      onGameOver: () => {
        dispatch(setGameOver(true));
      },
      onMessage: (user: User) => {
        console.log('onMessage', user);
        if (user.message?.includes('Welcome')) {
          dispatch(addUserInfo(user));
        }
      },
      onRandomNumber: (record: GameRecord) => {
        console.log('onRandomNumber', record);
        dispatch(addTurnRecord({ ...record, number: +record.number }));
      },
      onReady: (data: { state: boolean; }) => {
        console.log('onReady', data);
        dispatch(updateRoomStatus(data.state));
      },
      onListTrigger: (data: any) => { logger({ onListTrigger: data }); },
      onActivateYourTurn: ({ state }: { state: GameStatus; }) => {
        console.log('onActivateYourTurn', state);
        dispatch(updateTurnStatus(state));
      },
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/room/:id?'>
          <Authorize>
            <RoomPage/>
          </Authorize>
        </Route>
        <Route path={['/login', '/']}>
          <LoginPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
