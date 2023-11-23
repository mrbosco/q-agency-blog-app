import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Introduction from '@/components/layout/Introduction';

const customSubtitle = 'Hello QA agency';
const customTitle = 'I am glad that you are testing my blog';

jest.mock('@/hooks/useIntroduction', () => ({
  useIntroduction: () => ({
    introduction: {
      title: customTitle,
      subtitle: customSubtitle,
    },
    setIntroduction: jest.fn(),
  }),
}));

describe('Introduction Component', () => {
  test('renders custom title and subtitle from useIntroduction hook', () => {
    render(<Introduction />);

    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.getByText(customSubtitle)).toBeInTheDocument();
  });
});
