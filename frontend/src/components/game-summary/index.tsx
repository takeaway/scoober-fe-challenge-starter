import GameTurn from './game-turn';
import { GameRecord, User } from '../../types';

interface GameSummaryProps {
  gameRecords: GameRecord[];
  currentUser: User;
}

export default function GameSummary({ gameRecords, currentUser }: GameSummaryProps) {
  const [, ...records] = gameRecords;

  return (
    <div className='flex flex-col w-full p-2' data-testid='game-summary'>
      {
        records.map((record, idx) => (
          <GameTurn
            key={`${record.user}_${idx}`}
            gameRecord={record}
            isCurrentUser={record.user === currentUser.user}
            lastNumber={gameRecords[idx].number}
          />
        ))
      }
    </div>
  );
}
