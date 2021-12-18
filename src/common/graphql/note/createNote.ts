import { gql } from '@apollo/client';

export const CREATE_NOTE = gql`
  mutation newNote($content: String!) {
    newNote(content: $content) {
      content
    }
  }
`;
