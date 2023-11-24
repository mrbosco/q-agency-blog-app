import { useEffect } from 'react';
import styles from './styles.module.scss';
import { Comment as CommentType } from '@/types';
import { withLogging } from '@/components/hoc/withLogging';

const componentName = 'Comment';

interface CommentProps {
  comment: CommentType;
  message?: string;
}

const Comment: React.FC<CommentProps> = ({ message, comment }) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message]);

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

const CommentWithLogging = withLogging(Comment);
export default CommentWithLogging;
