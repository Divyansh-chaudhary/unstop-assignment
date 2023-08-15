import { css, styled } from "styled-components";
import { mediaSizes } from "../../../../constants/mediaQueries";

export const StyledAssessmentCard = styled.div`
  padding: 1rem;
  border: 1.5px solid ${(p) => p.theme.color.border};
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;
    flex-direction: row !important;
    border-bottom: none !important;
    padding: 0 !important;
    margin-bottom: 1rem;
  }

  section {
    border-bottom: 1.5px dashed ${(p) => p.theme.color.border};
    padding-bottom: 0.6rem;
    margin-bottom: 0.6rem;

    .heading {
      color: ${(p) => p.theme.color.primary};
      font-family: ${(p) => p.theme.font.inter};
      font-weight: 500;
      font-size: 18px;
      line-height: 25.2px;
    }

    .job-section {
      display: flex;
      align-items: center;

      .job {
        color: ${(p) => p.theme.color.primary};
        font-family: ${(p) => p.theme.font.inter};
        font-weight: 600;
        font-size: 14px;
        line-height: 19.6px;
        border-right: 1.5px solid ${(p) => p.theme.color.border};
        padding-right: 0.5rem;
        margin-right: 0.5rem;
      }

      .date {
        color: ${(p) => p.theme.color.grayText};
        font-family: ${(p) => p.theme.font.inter};
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      &:last-child {
        justify-content: flex-end;
      }
    }

    .count,
    button {
      color: ${(p) => p.theme.color.primary};
      font-family: ${(p) => p.theme.font.inter};
      font-weight: 600;
      font-size: 14px;
      line-height: 19.6px;
    }
    .title {
      color: ${(p) => p.theme.color.primary};
      font-family: ${(p) => p.theme.font.inter};
      font-weight: 500;
      font-size: 12px;
      line-height: 16.8px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 5px;
      background: transparent;
      border: 1.6px solid ${(p) => p.theme.color.primary};
      border-radius: 20px;
      outline: none;
      padding: 2px 5px;
    }
  }

  .all-candidates {
    display: flex;
    align-items: center;
    max-width: 100px;
    min-width: 40px;
    margin-left: 20px;
    justify-content: end;
  }

  .extra-person {
    color: ${(p) => p.theme.color.primary};
    font-family: ${(p) => p.theme.font.inter};
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    margin-left: 4px;
  }

  @media (max-width: ${mediaSizes.tablet}) {
    .count,
    button {
      font-size: 12px;
    }
    .title {
      font-size: 10px;
    }
  }
`;

export const CandidateAvatar = styled.p<{ color: string }>`
  ${(p) => css`
    background-color: ${p.color};
    border-radius: 50%;
    padding: 8px;
    border: 1.5px solid ${p.theme.color.white};
    text-transform: uppercase;
    color: ${(p) => p.theme.color.white};
    font-family: ${(p) => p.theme.font.inter};
    font-weight: 700;
    font-size: 14px;
    line-height: 19.6px;
    margin-left: -20px;
  `};
`;
