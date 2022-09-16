import styled, { keyframes } from "styled-components";

export const Svg = styled.svg`
  width: "400";
  height: "400";
`;

const rotation = keyframes`
0%,
  100% {
    stroke-dasharray: 157 0;
  }
  50% {
    stroke-dasharray: 0 157;
  }
`;
export const Rotate = styled.circle`
  stroke-dasharray: 157 0;
  animation: ${rotation} 3s infinite ease-in-out;
`;
