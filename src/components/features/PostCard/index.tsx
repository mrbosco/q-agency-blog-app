import styles from './styles.module.scss';

interface PostCardProps {
  author: string;
  title: string;
  summary: string;
}

const PostCard: React.FC<PostCardProps> = ({ author, title, summary }) => {
  return (
    <article className={styles.postCard}>
      <section className={styles.postCardContent}>
        <span>by {author}</span>
        <h2>{title}</h2>
        <p>{summary}</p>
      </section>
      <figure className={styles.postCardImage}>
        <img
          src="https://placehold.co/300x210?text=Hello+World"
          alt="Post Cover Photo"
          loading="lazy"
        />
      </figure>
    </article>
  );
};

export default PostCard;
