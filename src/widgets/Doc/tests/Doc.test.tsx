import { store } from '@/app/model/store/store';
import { BaseUrl } from '@/features/BaseUrl';
import { TEST_BASE_URL } from '@/setup-tests/server/mock-data';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { Doc } from '..';

describe('Documentation', () => {
  test('renders', async () => {
    render(
      <Provider store={store}>
        <Doc />
        <BaseUrl />
      </Provider>,
    );
    screen.getByText(/home/i);
    const baseUrlInput = screen.getByPlaceholderText(/url/i);
    await userEvent.type(baseUrlInput, TEST_BASE_URL);
    const showButton = screen.getByRole('button', { name: /show schema/i });
    await userEvent.click(showButton);
    const character = await screen.findByText('Character');
    await userEvent.click(character);
  });
});
