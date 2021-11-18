import { gql } from '@apollo/client';

export const VERIFY_TOKEN = gql`
  query {
    me {
      username
      avatar
      email
    }
  }
`;
