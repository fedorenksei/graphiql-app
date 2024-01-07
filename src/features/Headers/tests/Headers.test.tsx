import { store } from '@/app/model/store/store';
import { GraphQL } from '@/widgets/GraphQL';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

describe('Headers input', () => {
  test('can be added and removed', async () => {
    render(
      <Provider store={store}>
        <GraphQL />
      </Provider>,
    );

    expect(await screen.findAllByPlaceholderText(/header key/i)).toHaveLength(
      1,
    );

    const addHeaderButton = screen.getByRole('button', { name: /add header/i });
    await userEvent.click(addHeaderButton);
    expect(await screen.findAllByPlaceholderText(/header key/i)).toHaveLength(
      2,
    );

    const removeHeaderButtons = screen.getAllByRole('button', {
      name: /remove/i,
    });
    await userEvent.click(removeHeaderButtons[1]);
    expect(await screen.findAllByPlaceholderText(/header key/i)).toHaveLength(
      1,
    );
  });
});
