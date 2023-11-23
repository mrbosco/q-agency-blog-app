import styles from './styles.module.scss';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input className={styles.customInput} {...props} />;
};

export default Input;
