import { useEffect } from 'react';
import { useIntroduction } from '@/hooks/useIntroduction';
import { withLogging } from '@/components/hoc/withLogging';
import styles from './styles.module.scss';

const componentName = 'Introduction';

const Introduction: React.FC<{ message?: string }> = ({ message }) => {
  const { introduction } = useIntroduction();

  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message]);

  return (
    <div className={styles.introduction}>
      <span>{introduction.subtitle}</span>
      <h1>{introduction.title}</h1>
    </div>
  );
};

const IntroductionWithLogging = withLogging(Introduction);
export default IntroductionWithLogging;
