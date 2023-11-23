import React, { useState, useEffect } from 'react';
import PostCard from '@/components/features/PostCard';
import Spinner from '@/components/common/Spinner';
import { useFetch } from '@/hooks/useFetch';
import { fetchPostsAndRelations } from '@/services/apiPosts';
import { PostsAndRelations } from '@/types';
import styles from './styles.module.scss';
import { useDebounce } from '@/hooks/useDebounce';
import Input from '@/components/common/Input';

export const Posts = () => {
  const { url, transform } = fetchPostsAndRelations();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<PostsAndRelations[]>(url, transform);

  const [filteredPosts, setFilteredPosts] = useState<PostsAndRelations[]>([]);

  useEffect(() => {
    setFilteredPosts(
      debouncedSearchTerm && posts
        ? posts.filter((post) =>
            post.user.name
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase())
          )
        : posts || []
    );
  }, [debouncedSearchTerm, posts]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Unable to fetch posts. Please try again later.</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const renderPostCards = () => {
    return filteredPosts.length ? (
      filteredPosts.map((post, index) => (
        <React.Fragment key={post.id}>
          <PostCard
            id={post.id}
            title={post.title}
            summary={post.body}
            comments={post.comments}
            author={post.user.name}
          />
          {index !== filteredPosts.length - 1 && <hr />}
        </React.Fragment>
      ))
    ) : (
      <h1 style={{ textAlign: 'center' }}>No posts found</h1>
    );
  };

  return (
    <div>
      <div className={styles.postsSearchContainer}>
        <Input
          type="text"
          placeholder="Search by user name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span>{filteredPosts.length} posts found</span>
      </div>
      <div className={styles.postsContainer}>{renderPostCards()}</div>
    </div>
  );
};
