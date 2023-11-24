import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';

const Spinner = () => {
  useGreeting('Spinner');
  return <div className={styles.spinner}></div>;
};

export default Spinner;
