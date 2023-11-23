import styles from './styles.module.scss';
import { Comment } from '@/types';

interface CommentProps {
  comment: Comment;
}

const SingleConment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div>
      <div className={styles.commentAuthor}>
        <img
          src={`https://robohash.org/${comment.id}.png?size=32x32`}
          alt="Avatar"
        />
        <h4>{comment.name}</h4>
      </div>
      {comment.body}
    </div>
  );
};

export default SingleConment;
