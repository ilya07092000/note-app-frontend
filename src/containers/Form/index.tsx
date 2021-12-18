/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import Item from './Item/index';
import { useForm } from '../../common/hooks/useForm';
import { ModelForm, FormValidateResult } from '../../interfaces/FormModel';
import ErrorBox from './ErrorBox';

interface IFormProps {
  children: React.ReactElement;
  name: string;
  model: ModelForm;
  onSubmit: (values: FormValidateResult) => void;
  errorMsg?: string;
}

interface IFormContext {
  errors: Record<string, string>;
}

export const FormContext = React.createContext({} as IFormContext);

const Form = ({ children, name = '', onSubmit, model, errorMsg = '' }: IFormProps) => {
  const validateForm = useForm(model);
  const [errors, setErrors] = useState({});

  const submitHandler = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const validatedForm = validateForm(e);
    setErrors(() => validatedForm.errors);
    onSubmit(validatedForm);
  };

  return (
    <form name={name} onSubmit={submitHandler}>
      <FormContext.Provider value={{ errors }}>
        <ErrorBox msg={errorMsg} />
        {children}
      </FormContext.Provider>
    </form>
  );
};

Form.Item = Item;

export default Form;
