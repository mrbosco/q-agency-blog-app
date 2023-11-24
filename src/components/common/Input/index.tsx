import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { withLogging } from '@/components/hoc/withLogging';

const componentName = 'Input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  message?: string;
}

const Input: React.FC<InputProps> = ({ message, ...rest }) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message]);

  return <input className={styles.customInput} {...rest} />;
};

const InputWithLogging = withLogging(Input);
export default InputWithLogging;
