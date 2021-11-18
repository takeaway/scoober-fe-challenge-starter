import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Room } from '../../types';

export const roomApiSlice = createApi({
  reducerPath: 'roomsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004',
  }),
  tagTypes: ['Rooms'],
  endpoints(build) {
    return {
      fetchRooms: build.query<Room[], void>({
        query: () => '/rooms',
      }),
    };
  },
});

export const { useFetchRoomsQuery } = roomApiSlice;
