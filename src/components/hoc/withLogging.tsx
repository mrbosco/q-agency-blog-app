import React from 'react';

export function withLogging<T extends { message?: string }>(
  Component: React.ComponentType<T>,
  globalMessage: string = 'Hello from'
) {
  const WithMessageComponent: React.FC<T> = (props) => (
    <Component {...props} message={globalMessage} />
  );

  const displayName = Component.displayName || Component.name || 'Component';
  WithMessageComponent.displayName = `WithMessage(${displayName})`;

  return WithMessageComponent;
}
