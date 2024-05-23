import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout';
import { News } from './components/news/News';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Layout>
        <News />
      </Layout>
    </div>
  );
}

export default App;
