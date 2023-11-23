import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Post from '@/pages/Post';
import { BrowserRouter } from 'react-router-dom';
import * as useFetchModule from '@/hooks/useFetch';
import * as useIntroductionModule from '@/hooks/useIntroduction';
import Introduction from '@/components/layout/Introduction';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

describe('Post Component', () => {
  const mockPostData = {
    id: 1,
    title: 'Test Post Title',
    body: 'Test Post Body',
    user: { name: 'Test User' },
    comments: [{ id: 1, body: 'Test Comment' }],
  };

  const mockIntroduction = {
    title: mockPostData.title,
    subtitle: mockPostData.user.name,
  };

  const setIntroductionSpy = jest.fn();

  beforeEach(() => {
    jest.spyOn(useFetchModule, 'useFetch').mockReturnValue({
      data: mockPostData,
      isLoading: false,
      error: null,
    });

    jest.spyOn(useIntroductionModule, 'useIntroduction').mockReturnValue({
      introduction: mockIntroduction,
      setIntroduction: setIntroductionSpy,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call setIntroduction with the correct arguments', () => {
    render(
      <BrowserRouter>
        <Introduction />
        <Post />
      </BrowserRouter>
    );

    expect(setIntroductionSpy).toHaveBeenCalledWith({
      title: mockPostData.title,
      subtitle: mockPostData.user.name,
    });

    expect(screen.getByText('Test Post Title')).toBeInTheDocument();
    expect(screen.getByText('Test Post Body')).toBeInTheDocument();
    expect(screen.getByText('Test Comment')).toBeInTheDocument();
  });
});
