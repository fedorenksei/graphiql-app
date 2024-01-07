import { store } from '@/app/model/store/store';
import { GraphQL } from '@/widgets/GraphQL';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

describe('GraphQL', () => {
  test('submit button enables after inputs entered', async () => {
    render(
      <Provider store={store}>
        <GraphQL />
      </Provider>,
    );
    const baseUrlInput = screen.getByPlaceholderText(/url/i);
    const queryInput = screen.getByPlaceholderText(/query/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
    await userEvent.type(baseUrlInput, 'test');
    await userEvent.type(queryInput, 'test');
    expect(submitButton).toBeEnabled();
  });
});
