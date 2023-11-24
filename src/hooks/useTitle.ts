import React from 'react';

const defaultTitle = 'QA agency Blog';

export const useTitle = () => {
  const [title, setTitle] = React.useState(defaultTitle);
  const documentDefined = typeof document !== 'undefined';
  const originalTitle = React.useRef(documentDefined ? document.title : null);

  React.useEffect(() => {
    if (!documentDefined) return;

    const currentTitle = originalTitle.current;

    if (document.title !== title) document.title = `${defaultTitle} - ${title}`;

    return () => {
      document.title = currentTitle ?? '';
    };
  }, [documentDefined, title]);

  return { setTitle };
};
