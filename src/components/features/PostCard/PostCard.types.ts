import { ReactNode } from 'react';
import { Comment } from '@/types';

export interface PostCardContextProps {
  id: number;
}

export interface PostCardContentProps {
  author?: string;
  title?: string;
  summary: string;
}

export interface PostCardImageProps {
  src: string;
  alt: string;
}

export interface PostCardCommentsProps {
  comments?: Comment[];
}

export interface PostCardProps {
  id: number;
  children?: ReactNode;
  message?: string;
}

export interface PostCardComponent extends React.FC<PostCardProps> {
  Content: React.FC<PostCardContentProps>;
  Image: React.FC<PostCardImageProps>;
  Comments: React.FC<PostCardCommentsProps>;
}
