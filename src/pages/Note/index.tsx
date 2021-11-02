import React, { FC } from 'react';
import { useParams } from 'react-router';
import { useQuery, gql } from '@apollo/client';

import Dashboard from '../../containers/Dashboard/index';

const GET_NOTE = gql`
  query ($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      author {
        username
        avatar
        id
      }
    }
  }
`;

const Note: FC = () => {
  const { id: noteId }: any = useParams();

  const { loading, data } = useQuery(GET_NOTE, { variables: { id: noteId } });

  return (
    <Dashboard isLoading={loading}>
      {
        data?.note?.content
      }
    </Dashboard>
  );
};

export default Note;
