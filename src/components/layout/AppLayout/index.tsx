import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';
import Header from '@/components/layout/Header';

const AppLayout: React.FC = () => {
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
