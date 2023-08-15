import { styled } from "styled-components";
import { mediaSizes } from "../../constants/mediaQueries";

export const StyledLayout = styled.main`
  height: 100vh;
  background-color: ${(p) => p.theme.color.gray};
  display: flex;
  gap: 1rem;

  nav {
    height: 100%;
    background-color: ${(p) => p.theme.color.white};
    padding: 1rem;

    header {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding-left: 0;
      align-items: stretch;
      gap: 5px;
      padding-bottom: 1rem;
      margin-bottom: 1rem;

      &.border {
        border-bottom: 1px dashed ${(p) => p.theme.color.border};
      }

      li {
        text-align: center;
        padding: 0.7rem 1rem;
        cursor: pointer;

        .badge {
          margin: 0 auto 10px;
        }

        &.active {
          background: ${(p) => p.theme.color.secondaryLight};
          border-radius: 10px;
          box-shadow: 0 0 0 1.5px ${(p) => p.theme.color.secondary};
        }

        svg {
          fill: ${(p) => p.theme.color.primary};
        }

        p {
          color: ${(p) => p.theme.color.primary};
          font-family: ${(p) => p.theme.font.inter};
          font-weight: 500;
          font-size: 12px;
          line-height: 16.8px;
          margin-top: 5px;
        }
      }
    }
  }

  article {
    flex: 1;
    background-color: ${(p) => p.theme.color.white};

    header {
      border-bottom: 2px solid ${(p) => p.theme.color.border};
      padding: 1rem;
      display: flex;
      gap: 1rem;

      .menu-opener {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        .menu-icon {
          display: none;
        }

        h3 {
          color: ${(p) => p.theme.color.primary};
          font-family: ${(p) => p.theme.font.inter};
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          border-right: 2px solid ${(p) => p.theme.color.border};
          padding: 0.5rem 1rem;
        }
      }

      ul {
        flex: 1;
        list-style: none;
        padding-left: 0;
        display: flex;
        align-items: center;

        li {
          color: ${(p) => p.theme.color.primary};
          font-family: ${(p) => p.theme.font.inter};
          font-weight: 500;
          font-size: 14px;
          line-height: 16.9px;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;

          &.active {
            color: ${(p) => p.theme.color.secondary};

            &::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              background-color: ${(p) => p.theme.color.secondary};
              bottom: -1rem;
              left: 0;
            }
          }
        }

        li.unstop-item {
          display: none;
        }
      }
    }
  }

  main {
    padding: 1rem;
  }

  @media (max-width: ${mediaSizes.tablet}) {
    nav {
      width: 100vw;
      max-width: 400px;
      transform: translateX(-100%);
      transition: transform 0.2s linear;
      position: fixed;
      top: 0;
      left: 0;
      padding: 2rem 1rem;
      z-index: 10;
      border-right: 1px solid ${(p) => p.theme.color.border};

      ul {
        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }

      ul.bottom-list {
        li {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;

          .badge {
            margin: 0;
          }

          > div {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            p {
              margin: 0;
            }
          }
        }
      }

      &.open {
        transform: translateX(0);
      }

      header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;

        p {
          color: ${(p) => p.theme.color.primary};
          font-family: ${(p) => p.theme.font.inter};
          font-weight: 500;
          font-size: 14px;
          line-height: 19.6px;
        }
      }
    }

    article {
      header {
        flex-direction: column;

        .menu-opener {
          h3 {
            border-right: none;
          }

          .menu-icon {
            display: block;
          }
        }

        ul {
          li {
            flex: 1;
            text-align: center;
            display: block;
          }
          li.unstop-item {
            display: block;
          }
        }
      }
    }
  }
`;
