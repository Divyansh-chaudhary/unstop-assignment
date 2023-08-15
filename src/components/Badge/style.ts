import { styled } from "styled-components";

export const StyledBadge = styled.div`
  background-color: ${(p) => p.theme.color.redLight};
  box-shadow: 0 0 0 1.7px ${(p) => p.theme.color.red};
  border-radius: 20px;
  width: fit-content;
  padding: 2px 10px;

  p {
    color: ${(p) => p.theme.color.red};
    margin: 0 !important;
    text-transform: capitalize;
    font-family: ${(p) => p.theme.font.inter};
    font-weight: 500;
    font-size: 12px;
    line-height: 16.8px;
  }
`;
