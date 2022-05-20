import { css } from '@emotion/react';

export const baseCss = css`
  .frame {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border: 1px solid red;

    .inner-div {
      display: flex;
      justify-content: center;
      gap: 200px;
      border: 1px solid blue;
    }
  }
`;
