import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { Posts } from '@/pages/Posts';
import AppLayout from '@/components/layout/AppLayout';
import { IntroductionProvider } from './context/IntroductionContext';
import Post from './pages/Post';

const App = () => {
  return (
    <BrowserRouter>
      <IntroductionProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="posts" />} />
            <Route path="posts" element={<Posts />} />
            <Route path="post/:id" element={<Post />} />
          </Route>
        </Routes>
      </IntroductionProvider>
    </BrowserRouter>
  );
};

export default App;
