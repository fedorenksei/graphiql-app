import { render, screen } from '@testing-library/react';
import { App } from '@/app';
import userEvent from '@testing-library/user-event';

describe('SignIn form tests', () => {
  test('form rendered', async () => {
    render(<App />);
    const toSignInButton = screen.getByRole('button', { name: 'Sign in' });
    await userEvent.click(toSignInButton);
    expect((await screen.findAllByText('Sign in')).length).toBe(2);
    expect(await screen.findByTestId('sign-in-email')).toBeVisible();
    expect(await screen.findByTestId('sign-in-password')).toBeVisible();
  });

  test('btn initially disabled', async () => {
    render(<App />);
    const toSignInButton = screen.getByRole('button', { name: 'Sign in' });
    await userEvent.click(toSignInButton);
    expect(await screen.findByTestId('sign-in-button')).toBeDisabled();
  });

  test('form show errors with incorrect input', async () => {
    render(<App />);
    const toSignInButton = screen.getByRole('button', { name: 'Sign in' });
    await userEvent.click(toSignInButton);
    const emailInput = await screen.findByTestId('sign-in-email');
    const passwordInput = await screen.findByTestId('sign-in-password');
    await userEvent.type(emailInput, 'asd');
    await userEvent.type(passwordInput, '123');
    expect(await screen.findByText('Email is invalid')).toBeVisible();
    expect(
      await screen.findByText('Password should contain lowercase letter'),
    ).toBeVisible();
    expect(await screen.findByTestId('sign-in-button')).toBeDisabled();
  });

  test('form enable button with correct input', async () => {
    render(<App />);
    const toSignInButton = screen.getByRole('button', { name: 'Sign in' });
    await userEvent.click(toSignInButton);
    const emailInput = await screen.findByTestId('sign-in-email');
    const passwordInput = await screen.findByTestId('sign-in-password');
    await userEvent.type(emailInput, 'asd@mail.ru');
    await userEvent.type(passwordInput, 'asdASD123*');
    expect(await screen.findByTestId('sign-in-button')).toBeEnabled();
  });
});
