import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import Dashboard from '../../containers/Dashboard';

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
          email
        }
      }
    }
  }
`;

const Home: FC = () => {
  const { data, loading } = useQuery(GET_NOTES);
  console.log(data);
  return (
    <Dashboard isLoading={loading}>
      <h1>Home</h1>
    </Dashboard>
  );
};

export default Home;
