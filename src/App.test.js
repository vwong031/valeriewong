import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

jest.setTimeout(20000);

test('renders "Hi, I\'m Valerie Wong!" text', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Hi, I'm Valerie Wong!/i, {}, { timeout: 20000 });
  expect(linkElement).toBeInTheDocument();
});
