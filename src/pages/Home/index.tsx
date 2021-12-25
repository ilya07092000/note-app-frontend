import React, { FC, useContext, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { MainContext } from '../../common/context/main';
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
  const { data, loading, fetchMore, refetch } = useQuery(GET_NOTES);
  const [isLoadingMore, seIsLoadingMore] = useState<boolean>(false);
  const { state: { user } } = useContext(MainContext);
  console.log(user);

  useEffect(() => {
    refetch();
  }, []);

  const getMoreNotes = () => {
    console.log(data);
    seIsLoadingMore(true);
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery: (prevRes, { fetchMoreResult }) => {
        seIsLoadingMore(false);

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
  };

  const isNotesInData:boolean = !!data?.noteFeed?.notes?.length;

  return (
    <Dashboard isLoading={loading}>
      <div className={styles.notesWrap}>
        <div className={styles.notes}>
          {isNotesInData
            ? data.noteFeed.notes.map((note: INote) => (
                <Note
                  favorited={note.favorited}
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
          <div className={styles.loadMoreWrap} onClick={getMoreNotes}>
            <Button isLoading={isLoadingMore}>Load More</Button>
          </div>
        ) : null}
      </div>
    </Dashboard>
  );
};

export default Home;
