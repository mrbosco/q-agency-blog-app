import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';

import styles from './styles.module.scss';
import { withLogging } from '@/components/hoc/withLogging';
import { useEffect } from 'react';

const componentName = 'AppLayout';

const AppLayout: React.FC<{ message?: string }> = ({ message }) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message]);

  return (
    <div className={styles.appLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const AppLayoutWithLogging = withLogging(AppLayout);
export default AppLayoutWithLogging;
