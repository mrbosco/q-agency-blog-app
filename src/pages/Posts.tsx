import PostCard from '@/components/features/PostCard';

export const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostCard
        id={1}
        title="13 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
        summary="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
        author="Alem Tatarević"
      />
      <PostCard
        id={2}
        title="11 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
        summary="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
        author="Alem Tatarević"
      />
    </div>
  );
};
