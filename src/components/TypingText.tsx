import React from 'react';
import styled, { keyframes } from 'styled-components';

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

interface TypingTextProps {
  children: React.ReactNode;
}

const TypingText: React.FC<TypingTextProps> = ({children}) =>
{
  if (children === null || children === undefined) {
    return null;
  }

  let text = "";
  if (typeof children === "string")
  {
    text = children;
  }
  else if (Array.isArray(children) && typeof children[0] === "string")
  {
    for (let i = 0; i < children.length; i++)
    {
      text += children[i];
    }
  }

  const getTextWidth = (text: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
      return 0;
    }
    context.font = "16px Courier New";
    const width = context.measureText(text).width;
    return width;
  };

  const typing = keyframes`
      from { width: 0; }
      to { width: ${getTextWidth(text)*1.5}px; }
  `;

  const TypingAnimation = styled.h1`
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: .15em solid orange;
      animation: ${typing} 2s steps(${text.length}, end), ${blinkCaret} .75s step-end infinite;
  `;
  return <TypingAnimation>{children}</TypingAnimation>;
}

export default TypingText;
