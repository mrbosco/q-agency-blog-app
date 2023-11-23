import React from 'react';
import PostCard from '@/components/features/PostCard';
import Spinner from '@/components/layout/Spinner';
import { useFetch } from '@/hooks/useFetch';
import { fetchPostsAndRelations } from '@/services/apiPosts';
import { PostsAndRelations } from '@/types';
import styles from './styles.module.scss';

export const Posts = () => {
  const { url, transform } = fetchPostsAndRelations();
  const { data, isLoading, error } = useFetch<PostsAndRelations[]>(
    url,
    transform
  );

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <div>
      <div className={styles.postsContainer}>
        {data &&
          data.map((post, index) => (
            <React.Fragment key={post.id}>
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                summary={post.body}
                comments={post.comments}
                author={post.user.name}
              />
              {index !== data.length - 1 && <hr />}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};
