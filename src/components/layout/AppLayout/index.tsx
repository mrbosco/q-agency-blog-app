import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { useGreeting } from '@/hooks/useGreeting';

import styles from './styles.module.scss';

const AppLayout: React.FC = () => {
  useGreeting('AppLayout');

  return (
    <div className={styles.appLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
