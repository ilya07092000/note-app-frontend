import { FC } from 'react';
import EnterBox from '../../common/components/EnterBox';
import Form from '../../containers/Form/index';
import Input from '../../common/components/Input/index';
import PasswordInput from '../../common/components/PasswordInput/index';
import Button from '../../common/components/Button/index';
import signupModel from './signupModel';
import { FormValidateResult } from '../../interfaces/FormModel';

import styles from './styles.module.scss';

const links = [
  {
    path: '/signup',
    name: 'Signup',
  },
  {
    path: '/signin',
    name: 'Signin',
  },
];

const Signup: FC = () => {
  const submitForm = (values: FormValidateResult) => {
    console.log(values);
  };

  return (
    <EnterBox links={links}>
      <Form onSubmit={submitForm} name='signin' model={signupModel}>
        {/* require only one children */}
        <>
          <Form.Item classList={[styles.inputWrap]}>
            <Input label='Email' placeholder='example@email.com' name='email' id='email' />
          </Form.Item>
          <Form.Item classList={[styles.inputWrap]}>
            <Input label='Name' placeholder='Name' name='name' id='name' />
          </Form.Item>
          <Form.Item classList={[styles.inputWrap]}>
            <PasswordInput label='Passowrd' placeholder='password' name='password' id='password' />
          </Form.Item>
          <Form.Item classList={[styles.inputWrap]}>
            <PasswordInput
              label='Confirm Passowrd'
              placeholder='confirm password'
              name='confirm-password'
              id='confirm-password'
            />
          </Form.Item>
          <div className={styles.submitWrap}>
            <Button classList={[styles.submitBtn]}>Signin</Button>
          </div>
        </>
      </Form>
    </EnterBox>
  );
};

export default Signup;
