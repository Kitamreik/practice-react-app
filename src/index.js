import React from 'react';
import ReactDOM from 'react-dom';

// Importing components
import App from './App';

// Render
ReactDOM.render(<App />, document.getElementById('root'));

// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot