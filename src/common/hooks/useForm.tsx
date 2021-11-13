import React from 'react';
import { ModelForm } from '../../interfaces/FormModel';

const useForm = (model: ModelForm) => {
  /**
   *
   * @returns {object} form values from submited form due to defined form model
   */
  const getFormValues = ({ target }: React.BaseSyntheticEvent): Record<string, string> =>
    model.reduce(
      (prev, current) => ({
        ...prev,
        [current.name]: target.elements[current.name].value,
      }),
      {},
    );

  /**
   *  validates form values due to defined form model
   * @returns {object} errors
   */
  const getFormErrors = (values: Record<string, string>) =>
    model.reduce((prev: any, current: any) => {
      if (current.required && !values[current.name]) {
        return { ...prev, [current.name]: 'required' };
      }

      return { ...prev };
    }, {});

  /**
   *
   * @param {submit event} submited form event
   * @returns {object} with form values and errors
   */
  const submitHandler = (e: React.BaseSyntheticEvent) => {
    const formValues = getFormValues(e);
    const formErrors = getFormErrors(formValues);

    return { values: formValues, errors: formErrors };
  };

  return submitHandler;
};

export { useForm };
