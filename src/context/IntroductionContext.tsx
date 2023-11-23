import { createContext, useState, ReactNode, FC } from 'react';

interface IntroductionContextProps {
  introduction: {
    title: string;
    subtitle: string;
  };
  setIntroduction: (introduction: { title: string; subtitle: string }) => void;
}

const IntroductionContext = createContext<IntroductionContextProps | undefined>(
  undefined
);

interface IntroductionProviderProps {
  children: ReactNode;
}

export const IntroductionProvider: FC<IntroductionProviderProps> = ({
  children,
}) => {
  const [introduction, setIntroduction] = useState({
    title: 'Insights about my personal and work life, and the in-betweens',
    subtitle: '👋 WELCOME',
  });

  return (
    <IntroductionContext.Provider value={{ introduction, setIntroduction }}>
      {children}
    </IntroductionContext.Provider>
  );
};

export default IntroductionContext;
