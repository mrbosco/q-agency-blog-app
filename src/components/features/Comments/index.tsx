import styles from './styles.module.scss';
import { Comment } from '@/types';

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <>
      <span className={styles.commentsHeader}>LATEST COMMENTS</span>
      <ul className={styles.commentsList}>
        {comments &&
          comments.map((comment, index) => (
            <li key={index}>
              <div className={styles.commentAuthor}>
                <img
                  src={`https://robohash.org/${comment.id}.png?size=32x32`}
                  alt="Avatar"
                />
                <h4>{comment.name}</h4>
              </div>
              {comment.body}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Comments;
