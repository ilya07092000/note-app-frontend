/* eslint-disable import/no-unresolved */
import { FC, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSigninMutation } from 'src/generated/graphql';
import EnterBox from '../../common/components/EnterBox';
import Form from '../../containers/Form/index';
import Input from '../../common/components/Input/index';
import PasswordInput from '../../common/components/PasswordInput/index';
import Button from '../../common/components/Button/index';
import signinModel from './signinModel';
import { FormValidateResult } from '../../interfaces/FormModel';
import { ACTION_TYPES as TYPES } from '../../interfaces/MainContext/IActionTypes';
import { MainContext } from '../../common/context/main';

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
  const { dispatch, state: { isAuth } } = useContext(MainContext);
  const history = useHistory();

  const [signin, { loading }]: any = useSigninMutation({
    onCompleted: ({ signin }) => {
      if (signin.token && signin.user) {
        localStorage.setItem('token', signin.token);
        dispatch({ type: TYPES.LOGIN, payload: { user: signin.user } });
      }
    },
    onError: ({ message }) => setFormError(message),
  });

  const submitForm = ({ values }: FormValidateResult) => {
    signin({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  };

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth]);

  return (
    <EnterBox links={links}>
      <Form onSubmit={submitForm} name='signin' model={signinModel} errorMsg={formError}>
        {/* require only one children */}
        <>
          <Form.Item classList={[styles.inputWrap]}>
            <Input label='Email' placeholder='example@email.com' name='email' id='email' />
          </Form.Item>
          <Form.Item classList={[styles.inputWrap]}>
            <PasswordInput label='Passowrd' placeholder='password' name='password' id='password' />
          </Form.Item>
          <div className={styles.submitWrap}>
            <Button classList={styles.submitBtn} isLoading={loading}>
              Signin
            </Button>
          </div>
        </>
      </Form>
    </EnterBox>
  );
};

export default Signup;
