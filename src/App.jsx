import './App.css'
import Home from './pages/Home';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import SearchPage from './pages/SearchPage'


function App() {

  return (
    //BEM
    <div className="App">

      <Router>
        <Routes>

          <Route path='/search' element= {<SearchPage/>} />
    
          <Route path='/' element = {<Home/>} />

        </Routes>

      </Router>

    </div>
  );
}

export default App
