import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import Dashboard from '../../containers/Dashboard';
import Form from '../../containers/Form';
import { noteModel } from './noteModel';
import { FormValidateResult } from '../../interfaces/FormModel';
import { CREATE_NOTE } from '../../common/graphql/note/createNote';
import Button from '../../common/components/Button';

import styles from './styles.module.scss';

const newNote = () => {
  const onSubmit = useCallback(({ values, errors }: FormValidateResult) => {
    if (Object.keys(errors).length) return;

    createNote({
      variables: {
        content: values.text,
      },
    });
  }, []);

  const [createNote, { loading }]: any = useMutation(CREATE_NOTE, {
    onCompleted: ({ createNote }) => {
      console.log('created');
      console.log(createNote, loading);
    },
  });

  return (
    <Dashboard>
      <Form onSubmit={onSubmit} model={noteModel} name='create-note'>
        <>
          <Form.Item>
            <textarea id='text' name='text' className={styles.textarea}></textarea>
          </Form.Item>
          <div className={styles.submitBtnWrap}>
            <Button isLoading={loading} classList={styles.submitBtn} size="big">create</Button>
          </div>
        </>
      </Form>
    </Dashboard>
  );
};

export default newNote;
