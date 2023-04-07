import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

const darkTheme = {
  name: "darkTheme",
  backgroundBlack: '#212529',
  darkGrey: '#343a40',
  grey: '#495057',
  lightGrey: '#6c757d',
  darkWhite: '#ced4da',
  greyWhite: '#e9ecef',
  bone: '#f8f9fa',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles/>
    <ThemeProvider theme={darkTheme} >
      <App />
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals