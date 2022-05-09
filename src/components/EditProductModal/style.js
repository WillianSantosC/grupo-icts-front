import styled from 'styled-components';

export const FormContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  background-color: var(--light-brown);
  padding: 20px;
  border-radius: 5px;
  border: 3px groove var(--yellow);

  .MuiInputLabel-root {
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 375px) {
    width: 300px;
  }
`;
