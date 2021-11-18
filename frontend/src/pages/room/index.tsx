import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useFetchRoomsQuery } from '../../redux/reducers/rooms';
import SocketProvider from '../../SocketProvider';

import RoomNavigation from '../../components/rooms-navigation';
import MainTemplate from '../../templates/main';
import GameSummary from '../../components/game-summary';
import Button from '../../atoms/button';
import { resetTurnRecord, setGameOver } from '../../redux/reducers/game';
import Layover from '../../components/layover';

const RoomPage = () => {
  const { id } = useParams<{ id: string; }>();
  const userInfo = useAppSelector(state => state.user);
  const game = useAppSelector(state => state.game);
  const { length: gameRecordsLength } = game.gameRecords;
  const dispatch = useAppDispatch();

  const { data: rooms = [] } = useFetchRoomsQuery();
  const { type } = rooms.find(x => x.id === id) || { type: '' };

  useEffect(() => {
    const socket = SocketProvider.getInstance();
    if (id && type) {
      socket.joinRoom(userInfo.user, id, type);
    }
    return () => {
      dispatch(resetTurnRecord());
    };
  }, [id, type]);

  const currentRoom = rooms.find(x => x.id === id);

  function sendResponse(selectedNumber: number) {
    console.log(game);
    const socket = SocketProvider.getInstance();
    if (gameRecordsLength) {
      console.log(game.gameRecords[gameRecordsLength - 1].number);
      socket.sendNumber(game.gameRecords[gameRecordsLength - 1].number, selectedNumber);
    }
  }

  function letsPlay() {
    const socket = SocketProvider.getInstance();
    socket.letsPlay();
  }

  function startNewGame() {
    dispatch(resetTurnRecord());
    dispatch(setGameOver(false));
  }
  const headerMessage = currentRoom ? `Playing with ${currentRoom.name}` : 'Welcome to Game of Three';
  const lastGameRecord = gameRecordsLength > 0 ? game.gameRecords[gameRecordsLength - 1] : { user: '' };

  return (
    <MainTemplate headerMessage={headerMessage}>
      <div className='flex flex-wrap h-full'>
        <div className='w-full xl:w-[300px] xl:h-full bg-body md:p-2'>
          <p className='mb-2'>Choose your game room</p>
          <RoomNavigation
            rooms={rooms}
            id={id}
            type={type}
          />
        </div>
        <div className='w-full xl:w-[764px] xl:h-full py-2 md:p-2 bg-white'>
          {
            game.gameRecords.length > 0
              ? (
                <h2 className='text-center text-2xl'>
                  {`Starting from ${game.gameRecords[0].number}`}
                </h2>
              )
              : (
                <div className='flex justify-center'>
                  <Button
                    onClick={letsPlay}
                    label='Start Game'
                    className='primary-button w-[200px] justify-self-center'
                  />
                </div>
              )
          }
          <GameSummary gameRecords={game.gameRecords} currentUser={userInfo}/>
          {
            (
              (type === 'CPU' && game.turnState === 'play')
              || game.gameRecords.length === 1
              || lastGameRecord.user !== userInfo.user
            ) && (
              <div className='flex justify-center'>
                <Button label='-1' onClick={() => sendResponse(-1)} className='round-button mr-4'/>
                <Button label='0' onClick={() => sendResponse(0)} className='round-button mr-4'/>
                <Button label='+1' onClick={() => sendResponse(+1)} className='round-button'/>
              </div>
            )
          }
        </div>
      </div>
      {
        game.isOver && (
        <Layover>
          <div className='flex flex-col items-center'>
            <img
              className='max-w-[400px] mb-5'
              src={`/assets/${lastGameRecord.user !== userInfo.user ? 'game-over' : 'trophy'}.png`}
              alt='game-over'
            />
            <Button label='New Game' onClick={startNewGame} className='secondary-button w-[200px]'/>
          </div>
        </Layover>
        )
      }
    </MainTemplate>
  );
};

export default RoomPage;
