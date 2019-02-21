import { global } from 'styled-jsx/css';
import * as $ from './constants';

// language=CSS
export const bodyStyles = global`
  *, :after, :before {
    box-sizing: border-box;
  }  
    
  body {
    font-family: sans-serif;
    color: ${$.color.body};
  }
  
  h1,h2,h3,h4,h5,h6 {
    line-height: 1.2;
    font-weight: 400;   
    color: ${$.color.heading};
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
  
  p {
    font-size: 1.1em;
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
    
`;
