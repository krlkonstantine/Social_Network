import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {store} from "./redux/redux-store";

test('renders learn react link', () => {
  // @ts-ignore
  render(<App store={store} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
