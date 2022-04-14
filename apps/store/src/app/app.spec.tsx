import { render, findByText, act } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

function mockFetch(data) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    });
  });
}

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  });

  it('should render successfully', async () => {
    const promise = Promise.resolve();

    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
    await act(() => promise);
  });

  it('should have a greeting as the title', async () => {
    const promise = Promise.resolve();
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(findByText(baseElement, 'Board Game Hoard')).toBeTruthy();
    await act(() => promise);
  });
});
