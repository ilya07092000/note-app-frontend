import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation signin($email: String! $password: String!) {
    signin(email: $email, password: $password) {
      user {
        username,
        email,
        avatar
      },
      token,
    }
  }
`;
