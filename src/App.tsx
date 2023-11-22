import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { Posts } from '@/pages/Posts';
import AppLayout from '@/components/layout/AppLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="posts" />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
