import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import logger from "redux-logger";
import { todoReducer } from "./TodoReducer";
import { countReducer } from "./CountReducer";
const rootReducer = combineReducers({
  todoReducer: todoReducer.reducer,
  countReducer: countReducer.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
});

// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./modules', () => {
//       const newRootReducer = require('./modules').default
//       store.replaceReducer(newRootReducer)
//     })
//   }

export type AppDispatch = typeof store.dispatch;

export default store;
