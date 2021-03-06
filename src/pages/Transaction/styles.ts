import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface InputProps {
  hasError: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const FormContainer = styled.form`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;

  display: flex;

  flex-direction: column;

  label {
    font-size: 16px;
    color: #363f5f;
    margin-bottom: 5px;
  }

  select {
    margin-bottom: 15px;
    border-radius: 5px;
    color: #3a3a3a;
    border: 0.5px solid #3a3a3a;
    padding: 0 12px;
    height: 35px;

    option {
      color: #3a3a3a;
      height: 35px;
      padding: 0 12px;
    }
  }

  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;

export const Input = styled.input<InputProps>`
  padding: 0 12px;
  height: 35px;
  margin-bottom: 15px;
  border-radius: 5px;
  color: #3a3a3a;
  border: 0.5px solid #3a3a3a;

  ${props =>
    props.hasError &&
    css`
      border-color: #c53030;
    `}

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Footer = styled.section`
  margin-top: 36px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;
