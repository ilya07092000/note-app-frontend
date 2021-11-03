import React, { FC, useCallback, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Note from '../../common/components/Note/Note';
import Dashboard from '../../containers/Dashboard';
import Button from '../../common/components/Button';
import { INote } from '../../interfaces/INote';

import styles from './styles.module.scss';

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
  const { data, loading, fetchMore } = useQuery(GET_NOTES);
  const [isLoading, setIsLoading] = useState<boolean>(loading);

  useEffect(() => setIsLoading(loading), [loading]);

  const getMoreNotes = useCallback(() => {
    setIsLoading(true);
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery: (prevRes, { fetchMoreResult }) => {
        setIsLoading(false);

        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
            notes: [
              ...prevRes.noteFeed.notes,
              ...fetchMoreResult.noteFeed.notes,
            ],
            __typename: 'noteFeed',
          },
        };
      },
    });
  }, [isLoading, data, fetchMore]);

  return (
    <Dashboard isLoading={isLoading}>
      <div className={styles.notesWrap}>
        <div className={styles.notes}>
          {data?.noteFeed?.notes?.length
            ? data.noteFeed.notes.map((note: INote) => (
                <Note
                  key={note.id}
                  text={note.content}
                  author={note.author}
                  date={note.createdAt}
                  id={note.id}
                />
            ))
            : null}
        </div>
        {data?.noteFeed?.hasNextPage ? (
          <div className={styles.loadMoreWrap} onClick={getMoreNotes} >
            <Button>Load More</Button>
          </div>
        ) : null}
      </div>
    </Dashboard>
  );
};

export default Home;
