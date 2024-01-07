import { render, screen } from '@testing-library/react';
import { App } from '@/app';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../../../shared/languages/LanguageProvider';

describe('SignUp form tests', () => {
  test('form rendered', async () => {
    render(
      <LanguageProvider>
        <App />
      </LanguageProvider>,
    );
    const toSignUpButton = screen.getByRole('link', { name: 'Sign up' });
    await userEvent.click(toSignUpButton);
    expect((await screen.findAllByText('Sign up')).length).toBe(3);
    expect(await screen.findByTestId('sign-up-email')).toBeVisible();
    expect(await screen.findByTestId('sign-up-password')).toBeVisible();
    expect(await screen.findByTestId('sign-up-repeat')).toBeVisible();
  });

  test('btn initially disabled', async () => {
    render(<App />);
    const toSignUpButton = screen.getByRole('link', { name: 'Sign up' });
    await userEvent.click(toSignUpButton);
    expect(await screen.findByTestId('sign-up-button')).toBeDisabled();
  });

  test('form show errors with incorrect input', async () => {
    render(<App />);
    const toSignUpButton = screen.getByRole('link', { name: 'Sign up' });
    await userEvent.click(toSignUpButton);
    const emailInput = await screen.findByTestId('sign-up-email');
    const passwordInput = await screen.findByTestId('sign-up-password');
    const repeatInput = await screen.findByTestId('sign-up-repeat');
    await userEvent.type(emailInput, 'asd');
    await userEvent.type(passwordInput, '123');
    await userEvent.type(repeatInput, '321');
    expect(await screen.findByText('Email is invalid')).toBeVisible();
    expect(
      await screen.findByText('Password should contain lowercase letter'),
    ).toBeVisible();
    expect(await screen.findByText('Passwords is not the same')).toBeVisible();
    expect(await screen.findByTestId('sign-up-button')).toBeDisabled();
  });

  test('form enable button with correct input', async () => {
    render(<App />);
    const toSignUpButton = screen.getByRole('link', { name: 'Sign up' });
    await userEvent.click(toSignUpButton);
    const emailInput = await screen.findByTestId('sign-up-email');
    const passwordInput = await screen.findByTestId('sign-up-password');
    const repeatInput = await screen.findByTestId('sign-up-repeat');
    await userEvent.type(emailInput, 'asd@mail.ru');
    await userEvent.type(passwordInput, 'asdASD123*');
    await userEvent.type(repeatInput, 'asdASD123*');
    expect(await screen.findByTestId('sign-up-button')).toBeEnabled();
  });
});
