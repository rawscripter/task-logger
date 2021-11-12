import React, { useEffect } from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs'

const App = () => {

  // init materialize js
  useEffect(() => {
    M.AutoInit();

  }, [])

  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </div >
  );
}

export default App;
