import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
  }
`;

export const FormContainer = styled.div``;

export const FormContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
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
`;
