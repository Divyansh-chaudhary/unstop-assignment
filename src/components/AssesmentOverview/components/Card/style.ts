import { styled } from "styled-components";
import { mediaSizes } from "../../../../constants/mediaQueries";

export const StyledCard = styled.div`
  p.sub-heading {
    margin-bottom: 0.5rem;
  }

  .flex {
    display: flex;
    gap: 0.7rem;
    align-items: center;
  }

  .info-list {
    display: flex;
    align-items: center;

    .info-box:not(:last-child) {
      border-right: 1.5px solid ${(p) => p.theme.color.border};
      padding-right: 10px;
      margin-right: 10px;
    }

    .numbers {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .count {
      color: ${(p) => p.theme.color.primary};
      font-family: ${(p) => p.theme.font.inter};
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }

    .addOn {
      color: ${(p) => p.theme.color.success};
      font-family: ${(p) => p.theme.font.inter};
      font-weight: 500;
      font-size: 12px;
      line-height: 16.8px;
    }

    .text {
      color: ${(p) => p.theme.color.primary};
      font-family: ${(p) => p.theme.font.inter};
      font-weight: 500;
      font-size: 12px;
      line-height: 16.8px;
    }
  }

  @media (max-width: ${mediaSizes.desktop}) {
    .info-list {
      .count {
        font-size: 16px;
      }
    }
  }
`;
