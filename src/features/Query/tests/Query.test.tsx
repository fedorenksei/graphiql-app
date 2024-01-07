import { store } from '@/app/model/store/store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { Query } from '..';

describe('Query input', () => {
  test('formatting', async () => {
    render(
      <Provider store={store}>
        <Query />
      </Provider>,
    );

    const formatButton = screen.getByRole('button', { name: /format/i });
    const queryInput = screen.getByPlaceholderText(/query/i);

    await userEvent.type(queryInput, 'query{{person}');
    await userEvent.click(formatButton);
    expect(queryInput).toHaveValue('query {\n  person\n}');
  });
});
