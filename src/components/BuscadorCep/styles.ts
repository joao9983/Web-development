import styled from "styled-components";

export const Input = styled.input`
  color: ${(props) => props.theme.colors.Text};
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background};

  div.containerInput {
    background-color: ${(props) => props.theme.colors.secundary};
  }
`;
