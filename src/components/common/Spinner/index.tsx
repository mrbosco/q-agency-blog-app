import { useEffect } from 'react';
import styles from './styles.module.scss';
import { withLogging } from '@/components/hoc/withLogging';

const componentName = 'Spinner';

const Spinner: React.FC<{ message?: string }> = ({ message }) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message]);

  return <div className={styles.spinner}></div>;
};

const SpinnerWithLogging = withLogging(Spinner);
export default SpinnerWithLogging;
