import React, { createContext, ReactNode } from 'react';

type GreetingContextType = string;

export const GreetingContext = createContext<GreetingContextType>('Hello from');

interface GreetingProviderProps {
  children: ReactNode;
  greeting?: GreetingContextType;
}

export const GreetingProvider: React.FC<GreetingProviderProps> = ({
  children,
  greeting = 'Hello from',
}) => {
  return (
    <GreetingContext.Provider value={greeting}>
      {children}
    </GreetingContext.Provider>
  );
};
