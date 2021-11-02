import React, { FC, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Note from '../../common/components/Note/Note';
import Dashboard from '../../containers/Dashboard';

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
  const { data, loading } = useQuery(GET_NOTES);

  useEffect(() => {
    console.log(data?.noteFeed);
  }, [data]);

  return (
    <Dashboard isLoading={loading}>
      <div className={styles.notes}>
        {data?.noteFeed?.notes?.length
          ? data.noteFeed.notes.map((note: any) => (
              <Note text={note.content} author={note.author} date={note.createdAt} id={note.id} />
          ))
          : null}
      </div>
    </Dashboard>
  );
};

export default Home;
