import React from 'react';
import { ModelForm, IModelItem } from '../../interfaces/FormModel';
import { patternMatchValidation } from '../helpers/inputValidation';

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
    model.reduce((prev, current: IModelItem) => {
      const currFieldName = current.name;
      const currFieldValue = values[currFieldName];

      if (current.required && !currFieldValue) {
        return { ...prev, [currFieldName]: 'required' };
      }

      if (current?.rules?.length) {
        for (let i = 0; i < current.rules.length; i += 1) {
          if (!patternMatchValidation(currFieldValue, current.rules[i].pattern)) {
            return {
              ...prev,
              [currFieldName]: current.rules[i].msg || `${currFieldName} is not valid`,
            };
          }
        }
      }

      if (current.minLength && currFieldValue.length < current.minLength) {
        return {
          ...prev,
          [currFieldName]: `${currFieldName} must be longer than ${current.minLength} characters`,
        };
      }

      if (current.ref && currFieldValue && values[current.ref] !== currFieldValue) {
        return {
          ...prev,
          [currFieldName]: 'Confirm password does not match',
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
