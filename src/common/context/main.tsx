import React, { FC, useReducer } from 'react';
import { IAction } from '../../interfaces/MainContext/IAction';
import { IState } from '../../interfaces/MainContext/IState';
import { IMainContext } from '../../interfaces/MainContext/IMainContext';
import { ACTION_TYPES as TYPES } from '../../interfaces/MainContext/IActionTypes';

interface IMain {
 children: React.ReactNode;
}

const initState: IState = {
  isAuth: false,
  user: null,
};

const MainContext = React.createContext({} as IMainContext);

const MainContextProvider: FC<IMain> = ({ children }) => {
  const [state, dispatch] = useReducer(
    // TODO fix action type
    (prevState: IState, action: IAction<TYPES>): IState => {
      switch (action.type) {
        case TYPES.LOGIN:
          return { ...prevState, isAuth: true, user: action.payload.user };
        case TYPES.EXIT:
          return { ...prevState, isAuth: false, user: null };
        default:
          return state;
      }
    },
    initState,
  );

  return (
    <MainContext.Provider value={{ state, dispatch } as IMainContext}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider, MainContext };
