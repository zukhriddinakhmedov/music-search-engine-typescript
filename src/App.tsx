import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import MusicSearch from './components/MusicSearch';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MusicSearch />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
