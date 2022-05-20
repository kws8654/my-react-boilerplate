/* @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { baseCss } from './NavigateButton.style';

interface NavigateButtonProps {
  style?: object;
  children?: string;
  toPage: string;
}

const NavigateButton = ({ style, children, toPage }: NavigateButtonProps) => {
  const navigate = useNavigate();

  return (
    <div css={baseCss} style={style ? { ...style } : {}}>
      <button onClick={() => navigate(`/${toPage}`)}>To {toPage}</button>
      <div>{children}</div>
    </div>
  );
};

export default NavigateButton;
