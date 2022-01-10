import React, { useEffect, useState } from 'react';
import { INote } from '../../interfaces/INote';
import Note from '../../common/components/Note/Note';
import Button from '../../common/components/Button';

import styles from './styles.module.scss';

interface INotesProps {
  data: INote[];
  placeholder: string;
  hasNextPage?: boolean;
  isLoadingMore?: boolean;
  getMoreNotes?: () => void;
}

const Notes = React.memo(
  ({
    data = [],
    placeholder = '',
    hasNextPage = false,
    isLoadingMore = false,
    getMoreNotes,
  }: INotesProps) => {
    const [isNotesInData, setIsNotesInData] = useState<boolean>(!!data.length);
    const [notes, setNotes] = useState(data);

    useEffect(() => {
      setNotes(data);
      setIsNotesInData(!!data.length);
    }, [data]);

    return (
      <>
        <div className={styles.notes}>
          {isNotesInData ? (
            notes.map((note: INote) => (
              <Note
                favorited={note.favorited}
                key={note.id}
                text={note.content}
                author={note.author}
                date={note.createdAt}
                id={note.id}
              />
            ))
          ) : (
            <p>{placeholder}</p>
          )}
        </div>

        {hasNextPage && (
          <div className={styles.loadMoreWrap} onClick={getMoreNotes}>
            <Button isLoading={isLoadingMore}>Load More</Button>
          </div>
        )}
      </>
    );
  },
);

export default Notes;
