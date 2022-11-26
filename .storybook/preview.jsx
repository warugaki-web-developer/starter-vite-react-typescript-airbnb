import { Global } from '@emotion/react';
import GlobalStyle from '@/styles/GlobalStyle.tsx';

export const decorators = [
  (Story) => (
    <>
      <Global styles={GlobalStyle} />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
