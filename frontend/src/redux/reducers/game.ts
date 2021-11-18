import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameInfo, GameRecord, GameStatus } from '../../types';

const initialState: GameInfo = {
  gameRecords: [],
  turnState: 'wait',
  isRoomReady: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addTurnRecord(state, action: PayloadAction<GameRecord>) {
      return {
        ...state,
        gameRecords: [
          ...state.gameRecords,
          action.payload,
        ],
      };
    },
    resetTurnRecord(state) {
      return {
        ...state,
        gameRecords: [],
      };
    },
    updateTurnStatus(state, action: PayloadAction<GameStatus>) {
      return {
        ...state,
        turnState: action.payload,
      };
    },
    updateRoomStatus(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isRoomReady: action.payload,
      };
    },
    setGameOver(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isOver: action.payload,
      };
    },
  },
});

export const {
  addTurnRecord,
  updateTurnStatus,
  updateRoomStatus,
  resetTurnRecord,
  setGameOver,
} = gameSlice.actions;
export default gameSlice.reducer;
