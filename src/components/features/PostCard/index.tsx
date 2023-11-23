import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';
import LatestComments from '@/components/features/LatestComments';
import {
  PostCardCommentsProps,
  PostCardComponent,
  PostCardContentProps,
  PostCardContextProps,
  PostCardImageProps,
  PostCardProps,
} from './PostCard.types';

const PostCardContext = createContext<PostCardContextProps | undefined>(
  undefined
);

const PostCardContent: React.FC<PostCardContentProps> = ({
  author,
  title,
  summary,
}) => (
  <section className={styles.postCardContent}>
    {author && <span>by {author}</span>}
    {title && <h2>{title}</h2>}
    <p>{summary}</p>
  </section>
);

const PostCardImage: React.FC<PostCardImageProps> = ({ src, alt }) => (
  <figure className={styles.postCardImage}>
    <img src={src} alt={alt} loading="lazy" />
  </figure>
);

const PostCardComments: React.FC<PostCardCommentsProps> = ({ comments }) =>
  comments ? <LatestComments comments={comments} /> : null;

const PostCardBase: React.FC<PostCardProps> = ({ id, children }) => {
  useGreeting('PostCard');
  const navigate = useNavigate();

  const contentChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type !== PostCardComments
  );

  const commentsChildren = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === PostCardComments
  );

  return (
    <PostCardContext.Provider value={{ id }}>
      <article
        className={styles.postCard}
        onClick={() => navigate(`/post/${id}`)}
      >
        <div>{contentChildren}</div>
        {commentsChildren}
      </article>
    </PostCardContext.Provider>
  );
};

const PostCard = React.memo(PostCardBase) as unknown as PostCardComponent;
PostCard.Content = PostCardContent;
PostCard.Image = PostCardImage;
PostCard.Comments = PostCardComments;

export default PostCard;
