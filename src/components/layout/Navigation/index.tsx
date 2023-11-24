import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Routes } from './routes';
import { useEffect } from 'react';
import { withLogging } from '@/components/hoc/withLogging';

const componentName = 'Navigation';

const Navigation: React.FC<{ message?: string }> = ({ message }) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message]);

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

const NavigationWithLogging = withLogging(Navigation);
export default NavigationWithLogging;
