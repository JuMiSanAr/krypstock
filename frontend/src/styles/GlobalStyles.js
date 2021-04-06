import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {
    /* UI Colors */
    --primary-hue: 12;
    --color--primary: hsl(var(--primary-hue), 100%, 44%);
    --color--primary--hover: hsl(var(--primary-hue), 100%, 39%);
    --color--primary--active: hsl(var(--primary-hue), 84%, 30%);

    /* ... */

    --border-color: #ebebeb;

    /* Box Shadows */
    
    --shadow-01: 0px 2px 4px rgba(37, 37, 37, 0.1);
    --shadow-02: 0px 4px 8px rgba(37, 37, 37, 0.1);
    --shadow-03: 0px 8px 16px rgba(37, 37, 37, 0.1);
    --shadow-04: 0px 16px 24px rgba(37, 37, 37, 0.1);
    --shadow-05: 0px 24px 32px rgba(37, 37, 37, 0.1);

    /* ... */

}
  body {
    margin:0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family:Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    box-sizing: border-box;
  }
  
  `;