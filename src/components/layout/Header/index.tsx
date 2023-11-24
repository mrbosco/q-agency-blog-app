import { useEffect } from 'react';
import Introduction from '@/components/layout/Introduction';
import Navigation from '@/components/layout/Navigation';
import { withLogging } from '@/components/hoc/withLogging';

import style from './styles.module.scss';

const componentName = 'Header';

const Header: React.FC<{ message?: string }> = ({ message }) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message]);

  return (
    <header className={style.header}>
      <Navigation />
      <Introduction />
    </header>
  );
};

const HeaderWithLogging = withLogging(Header);
export default HeaderWithLogging;
