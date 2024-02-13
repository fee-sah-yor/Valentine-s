import React from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Yes from './components/yes';
// import Whatsapp from './components/Whatsapp';

const App = () => {
return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/yes' element={<Yes/>}/>
  {/* <Route path='/Whatsapp' element={<Whatsapp/>}/> */}
</Routes>
</BrowserRouter>
  )
}

export default App
