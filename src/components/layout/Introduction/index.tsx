import { useGreeting } from '@/hooks/useGreeting';
import styles from './styles.module.scss';
import { useIntroduction } from '@/hooks/useIntroduction';

const Introduction = () => {
  useGreeting('Introduction');
  const { introduction } = useIntroduction();

  return (
    <div className={styles.introduction}>
      <span>{introduction.subtitle}</span>
      <h1>{introduction.title}</h1>
    </div>
  );
};

export default Introduction;
