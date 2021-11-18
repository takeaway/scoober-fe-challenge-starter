export interface GameRecord {
  user?: string;
  number: number;
  isFirst: boolean;
  selectedNumber?: number;
  isCorrectResult?: boolean;
}

export type GameStatus = 'wait' | 'play';

export interface GameInfo {
  gameRecords: Array<GameRecord>;
  turnState: GameStatus;
  isRoomReady: boolean;
  isOver?: boolean;
}

export interface Room {
  id: string;
  name: string;
  owner: string;
  type: string;
}

export interface User {
  socketId: string;
  user: string;
  message:string;
}

export interface RomeQueryParams {
  id: string;
  type: string;
}

export interface LoginPageParams {
  redirectTo: string;
}
