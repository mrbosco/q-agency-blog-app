import styles from './styles.module.scss';
import SingleComment from '@/components/features/Comment';
import { useGreeting } from '@/hooks/useGreeting';
import { Comment } from '@/types';

interface LatestCommentsProps {
  comments: Comment[];
}

const LatestComments: React.FC<LatestCommentsProps> = ({ comments }) => {
  useGreeting('LatestComments');

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

export default LatestComments;
