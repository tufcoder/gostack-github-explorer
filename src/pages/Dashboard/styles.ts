import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  margin-top: 80px;
  max-width: 450px;
  font-size: 48px;
  color: var(--title);
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    border: 2px solid var(--white);
    border-radius: 5px 0 0 5px;
    padding: 0 24px;
    height: 70px;
    color: var(--title);

    ${props =>
      props.hasError &&
      css`
        border-right: 0;
        border-color: var(--error);
      `}

    &::placeholder {
      color: var(--placeholder);
    }
  }

  button {
    border: 0;
    border-radius: 0 5px 5px 0;
    width: 210px;
    height: 70px;
    font-weight: bold;
    color: var(--white);
    background: var(--button-primary);
    transition: background 0.2s;

    &:hover {
      background: var(--button-secondary);
    }
  }
`;

export const Repositories = styled.div`
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

    &:hover {
      transform: translateX(10px);
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
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: var(--error);
`;
