/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';
import { Comment, User } from '@/types';
import { fetchCommentsByPostId } from '@/services/apiComments';
import { useFetch } from '@/hooks/useFetch';
import Spinner from '@/components/layout/Spinner';
import { fetchUserById } from '@/services/apiUsers';

interface PostCardProps {
  id: number;
  author: string;
  title: string;
  summary: string;
  comments?: Comment[];
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  title,
  summary,
  comments,
}) => {
  useGreeting('PostCard');

  return (
    <article
      className={styles.postCard}
      onClick={() => {
        console.log('You clicked on post with id', id);
      }}
    >
      <section className={styles.postCardContent}>
        <span>by {author}</span>
        <h2>{title}</h2>
        <p>{summary}</p>
        {comments &&
          comments.map((comment) => <p key={comment.id}>{comment.body}</p>)}
      </section>
      <figure className={styles.postCardImage}>
        <img
          src={`https://picsum.photos/300/210?t=${Date.now() + id}`}
          alt="Post Cover Photo"
          loading="lazy"
        />
      </figure>
    </article>
  );
};

export default PostCard;
