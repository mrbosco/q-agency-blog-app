/* eslint-disable @typescript-eslint/no-explicit-any */
import { Comment } from '@/types';

export const fetchCommentsByPostId = (id: number) => {
  return {
    url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    transform: (data: any[]): Comment[] => {
      return data;
    },
  };
};
