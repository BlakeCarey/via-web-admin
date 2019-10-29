import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// bootstraps stylesheet
import 'bootstrap/dist/css/bootstrap.css';

// components
import App from 'App';

// application theme
import ApplicationTheme from 'config/applicationTheme';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        background-color: #e9e9e9
    }
`;

export default () => (
    <ThemeProvider theme={ApplicationTheme}>
        <React.Fragment>
            <GlobalStyles />
            <App />
        </React.Fragment>
    </ThemeProvider>
);
