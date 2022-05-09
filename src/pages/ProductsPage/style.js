import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--light-gray);
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  margin-top: 10px;

  @media (min-width: 530px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
