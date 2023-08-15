import { styled } from "styled-components";
import { mediaSizes } from "../../../../constants/mediaQueries";

export const NewAssessmentCardStyled = styled.div`
  border: 2px dashed ${(p) => p.theme.color.border};
  background-color: ${(p) => p.theme.color.gray};
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .description {
    color: ${(p) => p.theme.color.primary};
    font-family: ${(p) => p.theme.font.inter};
    font-weight: 500;
    font-size: 12px;
    line-height: 14.5px;
  }
`;

export const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  .overlay {
    background-color: ${(p) => p.theme.color.modalBg};
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    place-items: center;
    transition: all 0.2s linear;

    &.show {
      display: block;
    }
  }

  section {
    background-color: ${(p) => p.theme.color.white};
    border-radius: 10px;
    position: fixed;
    z-index: 12;
    bottom: -100%;
    transition: all 0.2s linear;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;

    &.show {
      bottom: 50%;
      transform: translate(-50%, 50%);
    }

    svg {
      cursor: pointer;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      padding: 1.5rem;

      p {
        color: ${(p) => p.theme.color.primary};
        font-family: ${(p) => p.theme.font.inter};
        font-weight: 600;
        font-size: 20px;
        line-height: 24.2px;
      }
    }

    form {
      padding: 1.5rem;

      label {
        color: ${(p) => p.theme.color.primary};
        font-family: ${(p) => p.theme.font.inter};
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        display: block;
        margin-bottom: 5px;
      }

      input,
      select {
        border: 1px solid ${(p) => p.theme.color.border};
        border-radius: 10px;
        color: ${(p) => p.theme.color.primary};
        font-family: ${(p) => p.theme.font.inter};
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        display: block;
        padding: 10px;
        width: 100%;
        margin-bottom: 1rem;

        &.skill {
          border-radius: 0 0 10px 10px;
        }
      }

      .preview {
        border: 1px solid ${(p) => p.theme.color.border};
        border-radius: 10px 10px 0 0;
        padding: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        & > div {
          background-color: ${(p) => p.theme.color.lightBlue};
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 3px 15px;
          color: ${(p) => p.theme.color.primary};
          font-family: ${(p) => p.theme.font.inter};
          font-weight: 500;
          font-size: 12px;
          line-height: 14.5px;
        }
      }

      button {
        width: 100%;
        display: block;
        background-color: ${(p) => p.theme.color.secondary};
        padding: 10px 0;
        border: none;
        border-radius: 5px;
        outline: none;
        color: ${(p) => p.theme.color.white};
        font-family: ${(p) => p.theme.font.inter};
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  @media (max-width: ${mediaSizes.tablet}) {
    section {
      max-height: 80vh;
      overflow: auto;

      &.show {
        bottom: 0;
        transform: translate(-50%, 0);
      }

      header {
        flex-direction: row !important;

        p {
          font-size: 15px;
        }
      }

      footer {
        position: sticky;
        bottom: 1rem;
      }
    }
  }
`;
