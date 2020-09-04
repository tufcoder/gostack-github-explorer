import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

interface RepositoryProps {
  isMobile: boolean;
}

export const Container = styled.div`
  width: inherit;
`;

export const Title = styled.h1`
  margin-top: 80px;
  max-width: 450px;
  font-size: 48px;
  color: var(--title);
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  max-width: 700px;

  input {
    border: 2px solid var(--white);
    border-radius: 5px;
    padding: 0 24px;
    height: 70px;
    color: var(--title);

    ${props =>
      props.hasError &&
      css`
        border-color: var(--error);
      `}

    &::placeholder {
      color: var(--placeholder);
    }
  }

  button {
    margin-top: 5px;
    border: 0;
    border-radius: 5px;
    height: 70px;
    font-weight: bold;
    color: var(--white);
    background: var(--button-primary);
    transition: background 0.2s;

    &:hover {
      background: var(--button-secondary);
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;

    input {
      flex: 1;
      border-radius: 5px 0 0 5px;

      ${props =>
        props.hasError &&
        css`
          border-right: 0;
          border-color: var(--error);
        `}
    }

    button {
      margin: 0;
      border-radius: 0 5px 5px 0;
      padding: 5px;
      width: 210px;
    }
  }
`;

export const Repositories = styled.div<RepositoryProps>`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;
    background: var(--white);
    transition: transform 0.2s;

    .close {
      display: none;
    }

    ${props =>
      props.isMobile &&
      css`
        position: relative;

        .close {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          margin: 5px;
        }
      `}

    &:hover {
      transform: translateX(10px);

      .close {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin: 5px;
        transition: color 0.2s;

        &:hover {
          color: var(--close);
        }
      }
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

  @media (max-width: 350px) {
    a {
      padding: 12px;

      div {
        strong {
          font-size: 15px;
        }

        p {
          font-size: 13px;
        }
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: var(--error);
`;
