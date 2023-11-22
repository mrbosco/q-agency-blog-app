import { Comment } from '@/types';

export const fetchCommentsByPostId = async (id: number): Promise<Comment[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching comments for post id ${id} :`, error);
    return [];
  }
};
