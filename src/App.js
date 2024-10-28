import React from 'react';

//Imports for client-side routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Imports for the different components of the app
import Header from './components/Nav';
import HomePage from './components/HomePage';
import ThemePage from './components/ThemePage';
import Login from './components/Login';
import './styles/App.css';

const App = () => {
  return (
    //Set up the router to use client-side navigation
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes> {/*Route for the homepage and the theme page(s)*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/theme/:themeName" element={<ThemePage />} />
          <Route path ="/login" element = {<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


/*import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/