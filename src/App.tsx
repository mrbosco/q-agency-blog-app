import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { Posts } from '@/pages/Posts';
import AppLayout from '@/components/layout/AppLayout';
import { GreetingProvider } from '@/context/GreetingContext';

const App = () => {
  return (
    <BrowserRouter>
      <GreetingProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="posts" />} />
            <Route path="posts" element={<Posts />} />
          </Route>
        </Routes>
      </GreetingProvider>
    </BrowserRouter>
  );
};

export default App;
