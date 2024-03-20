import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { App } from '..';
import { routerConfig } from '../model/router';
import { store } from '../model/store/store';

describe('App global tests', () => {
  test('App renders', () => {
    render(<App />);
    expect(screen.getByText(/meet our agile team/i)).toBeVisible();
  });

  test('404 page shown if landing bad route', () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ['/veryveryverybadroute'],
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    expect(screen.getByText('Page not found')).toBeVisible();
  });

  test('The main page is not available for unauthorized users', async () => {
    render(<App />);
    expect(screen.getAllByText('Sign in').length).toBe(1);
  });
});
