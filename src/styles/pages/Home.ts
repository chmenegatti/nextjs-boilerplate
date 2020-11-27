import { lighten, shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 95vw;
  max-width: 960px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  flex-direction: column;

  background: #eaeaea;

`;

export const Main = styled.main`
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 4px 4px 12px 4px rgba(136,136,136,075);

  align-items: center;

  > div {
    width: 100%;
    display: flex;
    height: 6rem;
    background-color: ${ props => props.theme.colors.color15 };
    margin-top: -8px;
    justify-content: center;

    svg {
      height: 12rem;
      width: 12rem;
    }
  }
`;

export const Ingredient = styled.section`
  width: 90%;
  max-width: 960px;
  height: auto;

  padding: 1rem;

  border: 3px solid ${ props => props.theme.colors.color15 };
  background-color: ${ props => props.theme.colors.color14 };
  border-radius: 8px;
  margin-top: 96px;
  margin-bottom: 16px;



  p {
    font-size: 20px;
    font-variant: small-caps;
    margin-bottom: 16px;
  }

  > div {
    margin-bottom: 16px;
  }
`;

export const ConvertFrame = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media(max-width: 800px) {
    flex-direction: column;
  }

  button {
    margin: 1em;
    color: ${ props => props.theme.colors.color15 };
    transition: color 0.3s;
    background: transparent;
    border: 0;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
      color: ${ shade(0.6, '#9D8C7C')};
    }

    &:active {
      color: ${ lighten(0.1, '#9D8C7C')};
      border: 0;
    }
  }
`;

export const Box = styled.div`
  width: 95%;
  height: auto;

  padding: 0.8em 0.8em;

  border: 2px solid ${ props => props.theme.colors.color15 };
  background-color: ${lighten(0.22, '#9D8C7C')};
  border-radius: 8px;


  span{
    font-variant: small-caps;
    font-size: 18px;
    margin-bottom: 16px;
  }

  .UnitSelect {
    margin: 16px 0;
    border: 2px solid ${props => props.theme.colors.color15};
    border-radius: 5px;
  }

  > input {
    font-size: 18px;
    color: #202020;
    width: 100%;
    padding: 0.5em;

    border: 2px solid ${props => props.theme.colors.color15};
    border-radius: 5px;

  }

  h1 {
    font-size: 18px;
    color: #202020;

    width: 100%;
    padding: 0.5em;

    border: 2px solid ${props => props.theme.colors.color15};
    border-radius: 5px;
  }
`;



