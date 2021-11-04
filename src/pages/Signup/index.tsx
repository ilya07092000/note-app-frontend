import { FC } from 'react';

import EnterBox from '../../common/components/EnterBox';

const links = [
  {
    path: '/signup',
    name: 'Signup',
  },
  {
    path: '/signin',
    name: 'Signup',
  },
];

const Signup: FC = () => (
  <>
    <EnterBox links={links} >
      123
    </EnterBox>
  </>
);

export default Signup;
