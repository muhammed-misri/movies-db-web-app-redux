import React from 'react';
import { Container } from 'react-bootstrap';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MovieDetails from './components/MovieDetails';

function App() {
  


  return (
    <div className='font color-body'>
      
      <NavBar/>

      <Container>

        <BrowserRouter>
          <Routes>
          
            <Route path="/" element={<MoviesList />}/>
            <Route path="/movie/:id" element={<MovieDetails />} />
            
          </Routes>
        </BrowserRouter>
      
      </Container>
    </div>
  );
}

export default App;


// 13:22 / 20:23