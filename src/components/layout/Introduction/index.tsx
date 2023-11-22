import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';

const Introduction = () => {
  useGreeting('Introduction');

  return (
    <div className={styles.introduction}>
      <span>👋 WELCOME</span>
      <h1>Insights about my personal and work life, and the in-betweens</h1>
    </div>
  );
};

export default Introduction;
