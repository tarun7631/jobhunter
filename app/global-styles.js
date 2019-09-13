import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
   }

   a {
    color: #03658c;
    text-decoration: none;
   }

  ul {
    list-style-type: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(250,250,250);
    /*background: #fff;*/
  }

  .pagination li{
    padding : 0px 10px !important ;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .pagination li a{
    color : rgba(0,0,0,0.54)
  }

  #app {
    background-color: rgb(240,240,240);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
