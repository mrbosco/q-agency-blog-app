import styles from './styles.module.scss';
import SingleComment from '@/components/features/Comment';
import { Comment } from '@/types';

interface LatestCommentsProps {
  comments: Comment[];
}

const LatestComments: React.FC<LatestCommentsProps> = ({ comments }) => {
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
