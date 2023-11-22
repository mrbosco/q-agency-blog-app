import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';

interface PostCardProps {
  id: number;
  author: string;
  title: string;
  summary: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, author, title, summary }) => {
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
