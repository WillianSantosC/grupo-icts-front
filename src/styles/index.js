import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
outline: 0;
border: none;
font-family: 'Montserrat', sans-serif;
}

:root {
--black: #0D0D0D;
--light-gray: #A69897;
--gray: #736463;
--light-brown: #40312C;
--yellow: #A67E33;
--shadow:box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.css-nrdprl-MuiTypography-root{
    color: var(--black)!important;
    font-weight: bold!important;
}

.css-1d3z3hw-MuiOutlinedInput-notchedOutline{
    border-color: #f4ed0b3b!important;
}

.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input{
    color: #ffffff!important;
    font-weight: bold!important;
}

button, svg {
cursor: pointer;
color: #ffffff
}
`;
