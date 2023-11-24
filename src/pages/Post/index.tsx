import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { match, P } from 'ts-pattern';

import Spinner from '@/components/common/Spinner';
import PostCard from '@/components/features/PostCard';
import { useFetch } from '@/hooks/useFetch';
import { useIntroduction } from '@/hooks/useIntroduction';
import { useTitle } from '@/hooks/useTitle';
import { fetchPostAndRelations } from '@/services/apiPosts';
import { PostsAndRelations } from '@/types';

const Post: React.FC = () => {
  const { id } = useParams();
  const { setIntroduction } = useIntroduction();
  const { setTitle } = useTitle();
  const { url, transform } = fetchPostAndRelations(Number(id) ?? 0);
  const {
    data: post,
    isLoading,
    error,
  } = useFetch<PostsAndRelations>(url, transform);

  useEffect(() => {
    if (post) {
      setIntroduction({
        title: post.title,
        subtitle: post.user.name,
      });
      setTitle(post.title);
    }
  }, [post, setIntroduction, setTitle]);

  return match({ isLoading, error, post })
    .with({ isLoading: true }, () => <Spinner />)
    .with({ error: P.not(null) }, () => (
      <div>Unable to fetch posts. Please try again later.</div>
    ))
    .with({ post: P.not(null) }, () => (
      <>
        <PostCard id={post!.id}>
          <PostCard.Content summary={post!.body} />
          <PostCard.Comments comments={post!.comments} />
        </PostCard>
      </>
    ))
    .with({ isLoading: false, error: null, post: null }, () => (
      <div>Unexpected state, please refresh the page.</div>
    ))
    .exhaustive();
};

export default Post;
