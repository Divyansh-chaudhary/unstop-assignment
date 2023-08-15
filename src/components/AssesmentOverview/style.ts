import { styled } from "styled-components";
import { mediaSizes } from "../../constants/mediaQueries";

export const Container = styled.div`
  height: 0;
  transition: all 0.1s linear;
  transform: scaleY(0);
  transform-origin: top;

  &.show {
    transform: scaleY(1);
    height: fit-content;
  }

  .total {
    grid-area: total;
  }
  .candidates {
    grid-area: candidates;
  }
  .source {
    grid-area: source;
  }
  .purpose {
    grid-area: purpose;
  }

  .grid {
    display: grid;
    grid-template-areas: "total candidates candidates source source purpose";
    border: 1px solid ${(p) => p.theme.color.border};
    border-radius: 10px;
    margin-top: 0.5rem;

    .card {
      padding: 1rem;
    }

    .card:not(:last-child) {
      border-right: 1.5px solid ${(p) => p.theme.color.border};
    }
  }

  @media (max-width: ${mediaSizes.desktop}) {
    .grid {
      grid-template-areas: "total purpose" "candidates candidates" "source source";

      .card {
        border-bottom: 1.5px solid ${(p) => p.theme.color.border};
      }
    }
  }

  @media (max-width: ${mediaSizes.tablet}) {
    .section-heading {
      display: none;
    }
  }
`;
