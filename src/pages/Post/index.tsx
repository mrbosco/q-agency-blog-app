import Spinner from '@/components/common/Spinner';
import PostCard from '@/components/features/PostCard';
import { useFetch } from '@/hooks/useFetch';
import { useIntroduction } from '@/hooks/useIntroduction';
import { fetchPostAndRelations } from '@/services/apiPosts';
import { PostsAndRelations } from '@/types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post: React.FC = () => {
  const { id } = useParams();
  const { setIntroduction } = useIntroduction();
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
    }
  }, [post, setIntroduction]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Unable to fetch posts. Please try again later.</div>;
  }

  return (
    <>
      {post && (
        <PostCard id={post.id}>
          <PostCard.Content summary={post.body} />
          <PostCard.Comments comments={post.comments} />
        </PostCard>
      )}
    </>
  );
};

export default Post;
