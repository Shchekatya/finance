import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout';
import { News } from './components/news/News';
import { Routing } from './components/routing';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
