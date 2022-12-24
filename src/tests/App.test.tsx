import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('should first', async () => {
  // 描画
  render(<App />);

  let button = screen.getByRole('button', { name: /count is/i });
  expect(button).toHaveTextContent('count is 0');

  const user = userEvent.setup();
  await user.click(button);
  button = await screen.findByRole('button', { name: /count is \d/ });
  expect(button).toHaveTextContent('count is 1');
});
