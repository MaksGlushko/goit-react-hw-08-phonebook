import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body {
  background-color: #f6f8fa;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

/* p:last-child {
  margin-bottom: 0;
} */

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
/* svg {
  pointer-events: none;
} */

html {
  scroll-behavior: smooth;
} 

`;