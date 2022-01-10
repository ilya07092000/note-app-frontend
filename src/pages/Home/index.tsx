import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { MainContext } from '../../common/context/main';
import Dashboard from '../../containers/Dashboard';
import Notes from '../../containers/Notes';

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favorited
        favoriteCount
        favoritedBy {
          id
        }
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
  const { data, loading, fetchMore, refetch } = useQuery(GET_NOTES, {
    notifyOnNetworkStatusChange: true,
  });
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const {
    state: { user },
  } = useContext(MainContext);
  console.log(user);

  useEffect(() => {
    refetch();
  }, []);

  const getMoreNotes = useCallback(() => {
    setIsLoadingMore(true);

    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery: (prevRes, { fetchMoreResult }) => {
        setIsLoadingMore(false);

        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
            notes: [...prevRes.noteFeed.notes, ...fetchMoreResult.noteFeed.notes],
            __typename: 'noteFeed',
          },
        };
      },
    });
  }, [data]);

  return (
    <Dashboard isLoading={loading} pageName='notes'>
      <Notes
        data={data?.noteFeed.notes}
        placeholder='We do not have any notes for you'
        hasNextPage={data?.noteFeed.hasNextPage}
        getMoreNotes={getMoreNotes}
        isLoadingMore={isLoadingMore}
      />
    </Dashboard>
  );
};

export default Home;
