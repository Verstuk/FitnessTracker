/**
 * @file: storeConfig.js
 * @description: Конфигурация Redux Store
 * @dependencies: @reduxjs/toolkit, react-redux
 * @created: 2023.10.15
 */

import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../store/settingsSlice';
import timerReducer from '../store/timerSlice';

export const store = configureStore({
  reducer: {
    timers: timerReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['timer/setTimerState'],
        ignoredPaths: ['timer.audio']
      }
    })
});

// Типизация для React
/** @typedef {ReturnType<typeof store.getState>} exports.RootState */
/** @typedef {typeof store.dispatch} exports.AppDispatch */

