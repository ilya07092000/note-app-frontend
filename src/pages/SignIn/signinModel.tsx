import { ModelForm } from '../../interfaces/FormModel';

const signinModel: ModelForm = [
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
    name: 'password',
    required: true,
    minLength: 6,
  },
  {
    name: 'bla',
    required: true,
    minLength: 6,
  },
];

export default signinModel;
