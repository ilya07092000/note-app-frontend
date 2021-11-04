import { FC } from 'react';

type IHeaderProps = {
  children: any;
};

const Header: FC<IHeaderProps> = ({ children }) => children;

export default Header;
