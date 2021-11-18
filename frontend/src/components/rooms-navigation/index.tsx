import NavLink from '../../atoms/nav-link';
import { Room } from '../../types';

interface RoomNavigationProps {
  rooms: Room[];
  id?: string;
  type?: string;
  testid?: string;
  className?: string;
}

export default function RoomNavigation({
  rooms, id, type, testid, className,
}: RoomNavigationProps) {
  return (
    <div className={`${className} flex flex-col`} data-testid={testid}>
      {rooms.map(room => (
        <NavLink
          key={`${room.id}${room.type}`}
          className='mb-0.25'
          isActive={room.id === id && room.type === type}
          label={room.name}
          url={`/room?id=${room.id}&type=${room.type}`}
        />
      ))}
    </div>
  );
}
