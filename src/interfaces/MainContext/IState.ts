import { IUser } from '../IUser';

export interface IState {
  isAuth: boolean;
  user: IUser | null;
}
