import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import UserProvider from './contexts/userContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



ReactDOM.render(
  
    <BrowserRouter>
      <ParallaxProvider>
        <UserProvider>
          <App />
        </UserProvider> 
      </ParallaxProvider>
    </BrowserRouter>
    
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
