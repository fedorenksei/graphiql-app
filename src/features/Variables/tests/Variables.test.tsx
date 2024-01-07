import { store } from '@/app/model/store/store';
import { GraphQL } from '@/widgets/GraphQL';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

describe('Variables input', () => {
  test('accepts only valid JSON', async () => {
    render(
      <Provider store={store}>
        <GraphQL />
      </Provider>,
    );
    const variablesInput = screen.getByPlaceholderText(/variables/);
    await userEvent.type(variablesInput, '123');
    screen.getByText(/enter a valid json/i);
    await userEvent.type(variablesInput, '{{"a": "b", "c": "d"}');
    waitForElementToBeRemoved(() => screen.getByText(/enter a valid json/i));
  });
});
