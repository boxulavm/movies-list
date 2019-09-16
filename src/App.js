import React, { useEffect } from 'react';

import Navbar from './components/layout/Navbar'
import MoviesList from './components/layout/MoviesList'


import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';



const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <Navbar />
      <MoviesList />
    </>
  )
}

export default App;
