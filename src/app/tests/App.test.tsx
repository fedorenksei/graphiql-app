import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { App } from '..';

describe('suite', () => {
  test('test', () => {
    render(<App />);
    // screen.getByText(/welcome/i);
  });
});
