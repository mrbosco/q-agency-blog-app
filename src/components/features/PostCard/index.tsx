import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';
import { Comment } from '@/types';
import Comments from '../Comments';
import React from 'react';

interface PostCardProps {
  id: number;
  author?: string;
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
    <>
      <article
        className={styles.postCard}
        onClick={() => {
          console.log('You clicked on post with id', id);
        }}
      >
        <section className={styles.postCardContent}>
          {author && <span>by {author}</span>}
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
      {comments && <Comments comments={comments} />}
    </>
  );
};

const MemoizedPostCard = React.memo(PostCard);

export default MemoizedPostCard;
