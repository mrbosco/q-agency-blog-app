/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post, PostsAndRelations, User } from '@/types';
import { fetchCommentsByPostId } from './apiComments';
import { fetchUserById } from './apiUsers';
export const fetchPosts = () => {
  return {
    url: 'https://jsonplaceholder.typicode.com/posts',
    transform: (data: any): Post[] => {
      return data;
    },
  };
};

const transformPostsAndRelations = async (
  data: any[]
): Promise<PostsAndRelations[]> => {
  const postsWithComments = await Promise.all(
    data.map(async (post) => {
      try {
        const commentsResponse = await fetch(
          fetchCommentsByPostId(post.id).url
        );
        const comments: Comment[] = await commentsResponse.json();

        const userResponse = await fetch(fetchUserById(post.userId).url);
        const user: User = await userResponse.json();

        return { ...post, comments, user };
      } catch (error) {
        console.error('Error fetching post relations:', error);
      }
    })
  );

  return postsWithComments.filter(
    (post) => post !== null
  ) as PostsAndRelations[];
};

export const fetchPostsAndRelations = () => {
  return {
    url: 'https://jsonplaceholder.typicode.com/posts',
    transform: transformPostsAndRelations,
  };
};

const transformPostAndRelations = async (
  data: any
): Promise<PostsAndRelations> => {
  try {
    const commentsResponse = await fetch(fetchCommentsByPostId(data.id).url);
    const comments: Comment[] = await commentsResponse.json();

    const userResponse = await fetch(fetchUserById(data.userId).url);
    const user: User = await userResponse.json();

    return { ...data, comments, user };
  } catch (error) {
    console.error('Error fetching post relations:', error);
    throw error;
  }
};

export const fetchPostAndRelations = (id: number) => {
  return {
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    transform: transformPostAndRelations,
  };
};
