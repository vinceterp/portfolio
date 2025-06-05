import { StyledParagraph } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

export const Typography = ({ children, ...rest }: TypographyProps) => {
  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};
