import { render, screen } from '@testing-library/react';

import App from '../App';

test('Hello Worldが描画されているか', () => {
  // 描画
  render(<App />);

  const appTextElement = screen.getByText('Hello World');
  expect(appTextElement).toBeInTheDocument();
});
