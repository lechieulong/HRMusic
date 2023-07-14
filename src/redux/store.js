import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import {shazamCoreApi} from './services/shazamCore';


export const store = configureStore({
  // all is a boilerplate code 
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  //it is single toolkit redux application 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
