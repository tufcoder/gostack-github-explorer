import styled from 'styled-components';

export const Container = styled.div`
  width: inherit;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--placeholder);
    transition: color 0.2s;

    &:hover {
      color: var(--title);
    }
  }

  svg {
    margin-right: 4px;
  }

  @media (max-width: 550px) {
    justify-content: space-evenly;
  }
`;

export const RepositoryInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;

  header {
    display: flex;
    width: inherit;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    div {
      flex: 1;
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: var(--strong);
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: var(--text);
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 400px;
    list-style: none;

    li {
      & + li {
        /* margin-left: 80px; */
      }

      strong {
        display: block;
        font-size: 36px;
        color: var(--strong);
      }

      span {
        margin-top: 4px;
        display: block;
        color: var(--text);
      }
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        margin: 0;
        text-align: center;
      }
    }

    ul {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        text-align: center;

        & + li {
          margin-top: 10px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 10px;
  width: inherit;

  a {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;
    background: var(--white);
    transition: transform 0.2s;
    width: inherit;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: var(--strong);
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: var(--placeholder);
      }
    }

    svg {
      margin-left: auto;
      color: var(--arrow-right);
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    margin-top: 40px;
    max-width: 500px;

    a {
      min-width: 300px;
      div {
        strong {
          font-size: 100%;
        }
      }
    }
  }
`;
