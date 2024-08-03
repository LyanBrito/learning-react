import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
            
        :root {
            --black-200: #212529;
            --black-100: #343A40;
            --gray-200: #495057;
            --gray-100: #6C757D;
            --white-300: #ADB5BD;
            --white-200: #DEE2E6;
            --white-100: #E9ECEF;

        }
        *{
            padding: 0px;
            margin: 0px;
            transition: all 0.16s ease-in;
        }
        p, a, li, ul, input,
        textarea,
        h1, h2, h3, h4, h5,
        button {
            font-family: "Sora", sans-serif;
            text-decoration: none;
            color: var(--gray-200);
            font-size: 16px;
            line-height: 24px;
            font-weight: 100;
            letter-spacing: 1px;
        }


`;
