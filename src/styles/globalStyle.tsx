import { css } from '@emotion/react';

// reset css
// https://elad2412.github.io/the-new-css-reset/
import 'the-new-css-reset/css/reset.css';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Roboto:wght@400;700&display=swap');

  :root {
    --font-color-base: #333;
    --font-family-base: Inter, Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --font-size-base: 16px;
    --font-weight-base: 400;
    --line-height-base: 1.5;
    --bg-color-base: #fcfcfc;
  }

  [lang='ja'] {
    --font-family-base: 'Roboto', 'Noto Sans JP', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-base);
    line-height: var(--line-height-base);
    color: var(--font-color-base);
    background-color: var(--bg-color-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
  }
`;

export default globalStyle;
