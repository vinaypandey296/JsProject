import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Stopwatch from './Components/Stopwatch/Stopwatch';
import Clock from './Components/Clock/Clock';


function App() {
  return ( < >
      <BrowserRouter >
      <Routes>
      <Route exact path = "/" element = { <Clock /> }/>
      <Route exact path="/stopwatch" element = { <Stopwatch/> } />
      </Routes>
      </BrowserRouter>        </>
  );
}

export default App;