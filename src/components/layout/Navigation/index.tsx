import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Routes } from './routes';
import { useGreeting } from '@/hooks/useGreeting';

const Navigation = () => {
  useGreeting('Navigation');

  return (
    <nav className={styles.navigation}>
      <Link className={styles.logo} to={Routes.HOME}>
        QA<span>_</span>BLOG
      </Link>
      <ul>
        <li>
          <Link to={Routes.POSTS}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
