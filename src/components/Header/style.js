import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  background-color: var(--black);

  h1,
  h4 {
    color: var(--yellow);
    font-weight: bold;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 10px;
  }
`;
