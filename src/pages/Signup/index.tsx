import { FC, useContext, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import EnterBox from '../../common/components/EnterBox';
import Form from '../../containers/Form/index';
import Input from '../../common/components/Input/index';
import PasswordInput from '../../common/components/PasswordInput/index';
import Button from '../../common/components/Button/index';
import signupModel from './signupModel';
import { FormValidateResult } from '../../interfaces/FormModel';
import { SIGN_UP } from '../../common/graphql/user/signup';
import { MainContext } from '../../common/context/main';
import { ACTION_TYPES as TYPES } from '../../interfaces/MainContext/IActionTypes';

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
  const [formError, setFormError] = useState('');
  const history = useHistory();

  const {
    state: { isAuth },
    dispatch,
  } = useContext(MainContext);

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth]);

  const [signUp, { loading }]: any = useMutation(SIGN_UP, {
    onCompleted: ({ signup }) => {
      if (signup.token && signup.user) {
        localStorage.setItem('token', signup.token);
        dispatch({ type: TYPES.LOGIN, payload: { user: signup.user } });
      }
    },
    onError: ({ message }) => setFormError(message),
  });

  const submitForm = ({ values, errors }: FormValidateResult) => {
    if (!Object.keys(errors).length) {
      signUp({
        variables: {
          email: values.email,
          password: values.password,
          username: values.name,
        },
      });
    }
  };

  return (
    <EnterBox links={links}>
      <Form onSubmit={submitForm} name='signin' model={signupModel} errorMsg={formError}>
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
            <Button isLoading={loading} classList={styles.submitBtn}>
              Signin
            </Button>
          </div>
        </>
      </Form>
    </EnterBox>
  );
};

export default Signup;
