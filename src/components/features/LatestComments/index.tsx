import styles from './styles.module.scss';
import SingleComment from '@/components/features/Comment';
import { withLogging } from '@/components/hoc/withLogging';
import { Comment } from '@/types';
import { useEffect } from 'react';

const componentName = 'LatestComments';

interface LatestCommentsProps {
  comments: Comment[];
  message?: string;
}

const LatestComments: React.FC<LatestCommentsProps> = ({
  message,
  comments,
}) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message]);

  return (
    <>
      <span className={styles.commentsHeader}>LATEST COMMENTS</span>
      <ul className={styles.commentsList}>
        {comments.map((comment, index) => (
          <li key={index}>
            <SingleComment comment={comment} />
          </li>
        ))}
      </ul>
    </>
  );
};

const LatestCommentsWithLogging = withLogging(LatestComments);
export default LatestCommentsWithLogging;
