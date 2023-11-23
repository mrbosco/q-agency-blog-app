// src/hooks/useIntroduction.ts
import { useContext } from 'react';
import IntroductionContext from '@/context/IntroductionContext';

export const useIntroduction = () => {
  const context = useContext(IntroductionContext);
  if (context === undefined) {
    throw new Error(
      'useIntroduction must be used within an IntroductionProvider'
    );
  }
  return context;
};
