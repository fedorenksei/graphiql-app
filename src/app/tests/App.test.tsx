import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { App } from '..';
import { routerConfig } from '../model/router';

describe('App global tests', () => {
  test('App hust rendered', () => {
    render(<App />);
    expect(screen.getByText(/welcome/i)).toBeVisible();
  });

  test('404 page shown if landing bad route', () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ['/veryveryverybadroute'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText('Page not found')).toBeVisible();
  });

  test('The main page is not available for unauthorized users', async () => {
    render(<App />);
    expect(screen.getAllByText('Sign in').length).toBe(1);
  });
});
