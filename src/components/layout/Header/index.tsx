import Introduction from '@/components/layout/Introduction';
import Navigation from '@/components/layout/Navigation';
import { useGreeting } from '@/hooks/useGreeting';

import style from './styles.module.scss';

const Header = () => {
  useGreeting('AppLayout');

  return (
    <header className={style.header}>
      <Navigation />
      <Introduction />
    </header>
  );
};

export default Header;
