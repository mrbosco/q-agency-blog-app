import React from 'react';
import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';
import { Comment } from '@/types';
import LatestComments from '../LatestComments';

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

  const handleArticleClick = () => {
    console.log('You clicked on post with id', id);
  };

  return (
    <>
      <article className={styles.postCard} onClick={handleArticleClick}>
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
      {comments && <LatestComments comments={comments} />}
    </>
  );
};

const MemoizedPostCard = React.memo(PostCard);

export default MemoizedPostCard;
