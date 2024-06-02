import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout';
import { News } from './components/news/News';


function App() {
  return (
    <div className="App">
      <Layout>
        <News />
      </Layout>
    </div>
  );
}

export default App;
