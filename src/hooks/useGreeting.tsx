import { useContext, useEffect } from 'react';
import { GreetingContext } from '@/context/GreetingContext';

export const useGreeting = (componentName: string, customMessage?: string) => {
  const defaultGreeting = useContext(GreetingContext);
  const greeting = customMessage || defaultGreeting;

  useEffect(() => {
    console.log(`${greeting} ${componentName}`);
  }, [greeting, componentName]);
};
