import React, { FC } from 'react';
import Header from '../../common/components/Header';
import Sidebar from '../../common/components/Sidebar/Sidebar';

export type IDashboardProps = {
  children: any
};

const Dashboard: FC<IDashboardProps> = ({ children }) => (
  <>
    <Header />
    <Sidebar />
    {children}
  </>
);

export default Dashboard;
