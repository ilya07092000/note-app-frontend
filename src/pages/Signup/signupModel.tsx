import { ModelForm } from '../../interfaces/FormModel';

const signupModel: ModelForm = [
  {
    name: 'email',
    required: true,
    rules: [
      {
        pattern: /\S+@\S+\.\S+/,
        msg: 'Email is not valid',
      },
    ],
  },
  {
    name: 'name',
    required: true,
    rules: [
      {
        pattern: /[A-Za-z]/,
        msg: 'Name should contain only letters',
      },
    ],
  },
  {
    name: 'password',
    required: true,
    minLength: 6,
  },
  {
    name: 'confirm-password',
    required: true,
    ref: 'password',
  },
];

export default signupModel;
