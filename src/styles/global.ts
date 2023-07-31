import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #3294f8;

        --base-title: #e7edf4;
        --base-subtitle: #c4d4e3;
        --base-text: #afc2d4;
        --base-span: #7b96b2;

        --base-label: #3a536b;
        --base-border: #1c2f41;
        --base-post: #112131;

        --base-profile: #0b1b2b;
        --base-background: #071422;
        --base-input: #040f1a;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: var(--base-background);
        color: var(--base-text);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
    }

    :focus {
        outline: 0;
        /* box-shadow: 0 0 0 2px var(--purple); */
    }

    a {
        text-decoration: none;
        color: pink;
        cursor: pointer;
    }

    button {
        border: none;
        cursor: pointer;
    }
`
