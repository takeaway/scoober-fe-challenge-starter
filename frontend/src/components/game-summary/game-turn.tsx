import PreviousCalculation from '../../atoms/previous-calculation';
import PreviousSelection from '../../atoms/previous-selection';
import CpuIcon from '../../assets/brand.png';
import UserIcon from '../../assets/user.png';

import { GameRecord } from '../../types';

interface GameTurnProps {
  isCurrentUser: boolean;
  gameRecord: GameRecord;
  lastNumber: number;
}

const GameTurn = ({ isCurrentUser, gameRecord, lastNumber }: GameTurnProps) => {
  const isAValidTurn = (gameRecord.selectedNumber || gameRecord.selectedNumber === 0)
    && (gameRecord.selectedNumber + lastNumber) % 3 === 0;
  const nextNumber = isAValidTurn
    ? ((gameRecord.selectedNumber || 0) + lastNumber) / 3
    : gameRecord.number;

  return (
    <div className={`flex items-start mb-5 ${isCurrentUser && 'flex-row-reverse'}`}>
      <img className='h-5 w-5' src={gameRecord.user === 'CPU' ? CpuIcon : UserIcon} alt='user-icon'/>
      <div className={`px-2 flex flex-col ${isCurrentUser && 'items-end'}`}>
        <PreviousSelection
          className='mb-1'
          label={gameRecord.selectedNumber?.toString() || ''}
          isSecondary={isCurrentUser}
        />
        {
          isAValidTurn && (
            <PreviousCalculation
              className='mb-1'
              alignRight={isCurrentUser}
              label={`[(${gameRecord.selectedNumber}+${lastNumber})/3]=${nextNumber}`}
            />
          )
        }
        <PreviousCalculation
          alignRight={isCurrentUser}
          label={nextNumber.toString()}
        />
      </div>
    </div>
  );
};

export default GameTurn;
