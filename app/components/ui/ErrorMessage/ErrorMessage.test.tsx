import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders without crashing', () => {
    render(
      <ErrorMessage title="Test Error" message="Test Message" code={404} />
    );
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  it('displays error code when provided', () => {
    render(
      <ErrorMessage title="Test Error" message="Test Message" code={404} />
    );
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders action button when provided', () => {
    const mockAction = jest.fn();
    render(
      <ErrorMessage
        title="Test Error"
        message="Test Message"
        action={{ label: 'Retry', onClick: mockAction }}
      />
    );

    const button = screen.getByText('Retry');
    fireEvent.click(button);
    expect(mockAction).toHaveBeenCalled();
  });
});
