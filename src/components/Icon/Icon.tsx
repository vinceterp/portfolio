import { StyledIconContainer } from "./Icon.styles";
import { IconProps } from "./Icon.types";

export const Icon = ({ children, size = 24, color }: IconProps) => {
  return (
    <StyledIconContainer $size={size} $color={color}>
      {children}
    </StyledIconContainer>
  );
};
