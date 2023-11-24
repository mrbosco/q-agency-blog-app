import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  useGreeting('Input');
  return <input className={styles.customInput} {...props} />;
};

export default Input;
