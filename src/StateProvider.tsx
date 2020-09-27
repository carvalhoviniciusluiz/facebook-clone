import React, { createContext, useReducer, useContext } from 'react';
import { Action } from './types/Action';
import { State } from './types/State';

export const StateContext = createContext<any>(null);

interface Provider {
  reducer: (prevState: State, action: Action) => State;
  initialState: State;
  children: React.ReactNode;
}

export const StateProvider: React.FC<Provider> = ({
  reducer,
  initialState,
  children
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
