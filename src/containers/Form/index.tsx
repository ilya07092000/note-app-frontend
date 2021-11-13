/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import Item from './Item/index';
import { useForm } from '../../common/hooks/useForm';
import { ModelForm, FormValidateResult } from '../../interfaces/FormModel';

interface IFormProps {
  children: React.ReactElement;
  name: string;
  model: ModelForm;
  onSubmit: (values: FormValidateResult) => void;
}

interface IFormContext {
  errors: Record<string, string>;
}

export const FormContext = React.createContext({} as IFormContext);

const Form = ({ children, name = '', onSubmit, model }: IFormProps) => {
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
      <FormContext.Provider value={{ errors }}>{children}</FormContext.Provider>
    </form>
  );
};

Form.Item = Item;

export default Form;
