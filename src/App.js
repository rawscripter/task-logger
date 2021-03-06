import React, { useEffect } from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import EditTechModal from './components/techs/EditTechModal';
import store from './store'
import { Provider } from 'react-redux'
// a
// b
// c
const App = () => {
  // init materialize js
  useEffect(() => {
    M.AutoInit();
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <AddTechModal />
          <EditLogModal />
          <TechListModal />
          <EditTechModal />
          <Logs />
        </div>
      </div >
    </Provider>
  );
}

export default App;
