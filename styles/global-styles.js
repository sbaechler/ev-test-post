import { global } from 'styled-jsx/css';
import * as $ from './constants';

// language=CSS
export const bodyStyles = global`
  *, :after, :before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }
    
  body {
    font-family: sans-serif;
    color: ${$.color.body};
    font-size: 12px;
  }
  
  h1,h2,h3,h4,h5,h6 {
    line-height: 1.2;
    font-weight: 400;   
    color: ${$.color.primary};
  }
  
  h1, h2, h3 {
    margin-bottom: 11px;
    margin-top: 22px;
  }
  
  h1 {
    font-size: 23px;
    font-weight: bold;
  }
  
  h2, h3 {
    font-size: 1.3em;
  }

  h4,
  h4 + p {
    display: inline;
  }
  
  h4::before {
    content: '';
    display: block;
    margin-top: 1rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.5;
    margin: 0 0 11px;
  }
  
  a {
    color: ${$.color.primary};
  }
  
  a:hover {
    color: ${$.color.primaryHover};
  }
  
  a:visited {
    color: ${$.color.primaryVisited};
  }

  ul {
    list-style-type: lower-latin;
    font-size: ${$.font.size.base};
  }

  ul ul {
    list-style-type: decimal;
  }

  li {
    padding-left: 1em;
  }
`;
