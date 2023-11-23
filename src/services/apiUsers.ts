/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@/types';

export const fetchUserById = (id: number) => {
  return {
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    transform: (data: any): User => {
      return data;
    },
  };
};
