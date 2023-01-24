import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        font-family: ${({ theme }) => theme.custom.font.sans};
        color: ${({ theme }) => theme.custom.colors.text900};
        padding: 0;
        margin: 0;
    }
    h1, h2, h3, h4, h5, h6, ul, li, p {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
`;