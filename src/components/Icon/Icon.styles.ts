import styled from "@emotion/styled";

export const StyledIconContainer = styled.div<{
  $size: number;
  $color?: string;
}>`
  color: ${({ color }) => color || "black"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: grey;
  border-radius: 50%;
  padding: 8px;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
