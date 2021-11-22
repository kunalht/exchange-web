import React from 'react';
import './App.css';
import ConvertCurrency from './components/ConvertCurrency';

function App() {
  return (
    <div className="App">
      <p>
        Currency Converter
      </p>
      <header className="App-header">
        <ConvertCurrency />
      </header>
    </div>
  );
}

export default App;
