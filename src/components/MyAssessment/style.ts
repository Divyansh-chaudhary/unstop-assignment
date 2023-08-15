import { styled } from "styled-components";
import { mediaSizes } from "../../constants/mediaQueries";
export const Container = styled.div`
  margin-top: 1rem;

  .all-assessments {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    > div {
      flex: 1;
    }
  }

  .heading-box {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: none;

      svg.active {
        background-color: ${(p) => p.theme.color.secondaryLight};
        border: 1.5px solid ${(p) => p.theme.color.secondary};
        border-radius: 50%;
        color: ${(p) => p.theme.color.secondary};
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        padding: 5px;
      }
    }
  }

  @media (max-width: ${mediaSizes.desktop}) {
    .all-assessments {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${mediaSizes.tablet}) {
    .all-assessments {
      grid-template-columns: 1fr;
    }
    .heading-box {
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }
  }
`;
