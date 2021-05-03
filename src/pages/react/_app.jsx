// reactApp.jsx
import React from 'react';
import ReactDom from 'react-dom';

import { Helmet } from "react-helmet";
const App = (props) => {
  return (
    <div>
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      Hello, React App!
    </div>
  );
};

const reactRoot = document.getElementById('root');
if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('No root element found');
}
