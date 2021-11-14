import React from 'react';
import { ModelForm } from '../../interfaces/FormModel';

const useForm = (model: ModelForm) => {
  /**
   *
   * @returns {object} form values from submited form due to defined form model
   */
  const getFormValues = ({ target }: React.BaseSyntheticEvent): Record<string, string> =>
    model.reduce(
      (prev, current) =>
        target.elements[current.name]
          ? {
            ...prev,
            [current.name]: target.elements[current.name].value,
          }
          : { ...prev },
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

      if (current?.rules?.length) {
        for (let i = 0; i < current.rules.length; i += 1) {
          if (!values[current.name].match(current.rules[i].pattern)) {
            return { ...prev, [current.name]: current.msg || `${current.name} is not valid` };
          }
        }
      }

      if (current.minLength && values[current.name].length < current.minLength) {
        return {
          ...prev,
          [current.name]: `${current.name} must be longer than ${current.minLength} characters`,
        };
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
