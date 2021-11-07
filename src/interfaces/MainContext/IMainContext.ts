import { Dispatch } from 'react';
import { IState } from './IState';

export interface IMainContext {
  state: IState;
  dispatch: Dispatch<any>;
}
