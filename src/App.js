import React from 'react';
import './App.css';
import { ErrorBoundary } from './components/ErorBoundary/index';
import { Test } from './components/ErorBtn/index';
import { ErrorRouter } from './components/ErrorRouter/index';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Test />
      </ErrorBoundary>
     
     <ErrorRouter />
      
    </div>
  )
}

export default App;
