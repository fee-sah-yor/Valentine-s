import React from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Yes from './components/yes';

const App = () => {
return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/yes' element={<Yes/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
