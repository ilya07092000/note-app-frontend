import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation signup($email: String!, $username: String!, $password: String!) {
    signup(email: $email, password: $password, username: $username) {
      user {
        username,
        email,
        avatar
      },
      token,
    }
  }
`;
