import Introduction from '@/components/layout/Introduction';
import Navigation from '@/components/layout/Navigation';

import style from './styles.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <Introduction />
    </header>
  );
};

export default Header;
